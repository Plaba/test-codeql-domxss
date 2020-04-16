/**
 * @kind path
 * @id 12345
 */

import javascript
import DataFlow

class Location_Sink extends DataFlow::Node {
  Location_Sink() {
    exists(DataFlow::CallNode call |
      call = DataFlow::globalVarRef("open").getACall() // window.open(...) and open(...)
      or
      call = DataFlow::globalVarRef("location").getAMethodCall("assign")
      or
      call = DataFlow::globalVarRef("location").getAMethodCall("replace")
    |
      this = call.getArgument(0)
    )
    or
    exists(Assignment m | m.getLhs() = DataFlow::globalVarRef("location").asExpr() |
      this.asExpr() = m.getRhs() // this uncovers `location=...` and `window.location=...`
    )
    or
    exists(DataFlow::PropWrite pw |
      DataFlow::globalVarRef("document").getAPropertyWrite("location") = pw //document.location = ...
      or
      DataFlow::globalVarRef("location").getAPropertyWrite("href") = pw //location.href = ...
      or 
      pw.getPropertyName().regexpMatch(".*src$") //e.src = ...
      or 
      pw.getPropertyName().regexpMatch(".*style$") //e.style = ...
      or 
      pw.getPropertyName().regexpMatch(".*href$")
    |
      this = pw.getRhs()
    )
  }
}

class Document_Sink extends DataFlow::Node {
  Document_Sink() {
    exists(DataFlow::MethodCallNode call, int argPos |
      call = DataFlow::globalVarRef("document").getAMethodCall("write")
      or
      call = DataFlow::globalVarRef("document").getAMethodCall("writeln")
      or
      call.getCalleeName() = "insertAdjacentHTML" and argPos = 1
      or
      call.getMethodName() = ""
    |
      this = call.getArgument(argPos)
    )
    or 
    exists(DataFlow::PropWrite pw 
    |
      pw.getPropertyName().regexpMatch(".*(innerHTML|outerHTML)$")
    |
    this = pw.getRhs()
    )
  }
}

class Eval_Sink extends DataFlow::Node {
  Eval_Sink() {
    exists(DataFlow::MethodCallNode call, int argPos |
      call = DataFlow::globalVarRef("eval") and argPos = 0
      or 
      call = DataFlow::globalVarRef("Function") and argPos = 0
      or 
      call = DataFlow::globalVarRef("setTimeout") and argPos = 0
      or 
      call = DataFlow::globalVarRef("setInterval") and argPos = 0
      or 
      call = DataFlow::globalVarRef("window").getAMethodCall("execScript") and argPos = 0
      or 
      call = DataFlow::globalVarRef("window").getAMethodCall("eval") and argPos = 0
      or
      call = DataFlow::globalVarRef("window").getAMethodCall("setTimeout") and argPos = 0
      or
      call = DataFlow::globalVarRef("window").getAMethodCall("setInterval") and argPos = 0
    |
      this = call.getArgument(argPos)
    )
  }
}

class DomXSSDataFlowConfiguration extends DataFlow::Configuration {
  DomXSSDataFlowConfiguration() { this = "DomXSSDataFlowConfiguration" }

  override predicate isSource(DataFlow::Node source) { 
    any()
  }

  override predicate isSink(DataFlow::Node sink) {
    //sink instanceof Location_Sink
    //or sink instanceof Document_Sink
    sink instanceof Eval_Sink
  }

  // optional overrides:
  // override predicate isBarrier(DataFlow::Node nd) { /* ... */ }
  // override predicate isBarrierEdge(DataFlow::Node pred, DataFlow::Node succ) { /* ... */ }
  // override predicate isAdditionalFlowStep(DataFlow::Node pred, DataFlow::Node succ) { /* ... */ }
}

from DomXSSDataFlowConfiguration cfg, PathNode source, PathNode sink
where cfg.hasFlowPath(source, sink)
select source, source.getFile(), source.asExpr().getLocation(), sink.asExpr().getLocation(), sink
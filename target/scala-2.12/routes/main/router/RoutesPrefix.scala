
// @GENERATOR:play-routes-compiler
// @SOURCE:/opt/playframework/play-java-seed/conf/routes
// @DATE:Wed Oct 04 15:06:00 CEST 2017


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}

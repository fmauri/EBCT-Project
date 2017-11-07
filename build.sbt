name := """EBCT-project"""
organization := "com.example"

version := "1.0-SNAPSHOT"

val appDependencies = Seq(
  "ws.securesocial" %% "securesocial" % "2.1.4"
)

val appDependencies = Seq(
  "ws.securesocial" %% "securesocial" % "master-SNAPSHOT"
)
val main = play.Project(appName, appVersion, appDependencies).settings(
  resolvers += Resolver.sonatypeRepo("snapshots")
)

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.12.2"

libraryDependencies += guice
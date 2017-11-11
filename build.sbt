name := """EBCT-project"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.12.2"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  "org.mindrot" % "jbcrypt" % "0.3m",
  javaWs,
  guice
)

routesGenerator := InjectedRoutesGenerator

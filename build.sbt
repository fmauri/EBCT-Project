name := """EBCT-project"""
organization := "com.example"

version := "1.0-SNAPSHOT"

val appDependencies = Seq(
  "be.objectify" %% "deadbolt-java" % "2.5.0",
  // Comment the next line for local development of the Play Authentication core:
  "com.feth" %% "play-authenticate" % "0.8.3",
  "org.postgresql" % "postgresql" % "9.4-1206-jdbc42",
  cache,
  evolutions,
  javaWs,
  javaJdbc,
  "org.webjars" % "bootstrap" % "3.2.0",
  "org.easytesting" % "fest-assert" % "1.4" % "test",
  "org.seleniumhq.selenium" % "selenium-java" % "2.52.0" % "test"
)

lazy val root = (project in file("."))
  .enablePlugins(PlayJava, PlayEbean)
  .settings(
    libraryDependencies ++= appDependencies
  )

scalaVersion := "2.12.2"

libraryDependencies += guice

// display deprecated or poorly formed Java
javacOptions ++= Seq("-Xlint:unchecked")
javacOptions ++= Seq("-Xlint:deprecation")
javacOptions ++= Seq("-Xdiags:verbose")

// add resolver for deadbolt and easymail snapshots
resolvers += Resolver.sonatypeRepo("snapshots")
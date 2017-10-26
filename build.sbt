name := """EBCT-project"""
organization := "com.example"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava, PlayEbean)

scalaVersion := "2.12.2"

libraryDependencies ++= Seq(
  evolutions,
  guice,
  jdbc,
  "org.postgresql" % "postgresql" % "42.1.3"
)

//herokuAppName in Compile := "ebct-project"
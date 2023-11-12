const snippetText = [
  {
    content: "label ${1:label_name}:\n\t${2:}",
    name: "label",
    tabTrigger: "label",
    scope: "renpy"
  },
  {
    content: "jump ${1:label_name}",
    name: "jump",
    tabTrigger: "jump",
    scope: "renpy"
  },
  {
    content: "call ${1:label_name}",
    name: "call",
    tabTrigger: "call",
    scope: "renpy"
  },
  {
    content: "$ ${1:#python statements}",
    name: "p1",
    tabTrigger: "p1",
    scope: "renpy"
  },
  {
    content: "python:\n\t${1:}",
    name: "py",
    tabTrigger: "py",
    scope: "renpy"
  },
  {
    content: "init ${1:#priority number}:\n\t${2:}",
    name: "init",
    tabTrigger: "init",
    scope: "renpy"
  },
  {
    content: "init ${1:#priority number} python:\n\t${2:}",
    name: "inipy",
    tabTrigger: "inipy",
    scope: "renpy"
  },
  {
    content: "define ${1:character_name} = Character(\"${2:displayable name}\")",
    name: "char",
    tabTrigger: "char",
    scope: "renpy"
  },
  {
    content: "define ${1:character_name} = Character(None, kind=nvl)\n${2:}",
    name: "charnvl",
    tabTrigger: "charnvl",
    scope: "renpy"
  },
  {
    content: "$ ${1:variable_name} = ${2:# variable value}",
    name: "$",
    tabTrigger: "$",
    scope: "renpy"
  },
  {
    content: "$ renpy.movie_cutscene('${1:file_name.extension}')",
    name: "cutscene",
    tabTrigger: "cutscene",
    scope: "renpy"
  },
  {
    content: "$ renpy.pause($1)\n$2",
    name: "rpause",
    tabTrigger: "rpause",
    scope: "renpy"
  },
  {
    content: "menu ${1:optional_name}:\n\t\"${2:Say Statement}\"\n\t\"${3:Choice 1}\":\n\t\t#block of code to run\n\t\"${4:Choice 2}\":\n\t\t#block of code to run\n\t${5:}",
    name: "menu",
    tabTrigger: "menu",
    scope: "renpy"
  },
  {
    content: "\"${1:Choice N}\":\n\t${2:#block of code to run}\n\t$3",
    name: "choice",
    tabTrigger: "choice",
    scope: "renpy"
  },
]
export default snippetText
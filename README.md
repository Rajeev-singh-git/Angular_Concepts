## commit 1 = Binding to Custom properties

In this commit, I Binded ["element"] property of ["server-element-component.ts"] to ["app.component.html]. Also, I assigned ["serverElement"] to the name of property in app.component.html.

~Now, we can access [element] propety of ["server-componet"] from ["app-component"]

## commit 2 = Assigning Alias

We might not want to give original property name of component to other component who is accessing the property by binding.

In our case, property ["element"] of [server-element-component] is accessed by [app-component]. We don't want [app-component] to use property name [element] to access prpoperty [element] of [server-element-component]. So, we can give name of our choice by ["Assigning an alias to cutom properties"].

~Here, we are assigning Alias name "[srvElement]"

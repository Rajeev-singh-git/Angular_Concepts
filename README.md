## Commit 1 = Binding to Custom properties

In this commit, I Binded ["element"] property of ["server-element-component.ts"] to ["app.component.html"]. Also, I assigned ["serverElement"] to the name of property in app.component.html."

~Now, we can access [element] propety of ["server-componet"] from ["app-component"]

## Commit 2 = Assigning Alias

We might not want to give original property name of component to other component who is accessing the property by binding.

In our case, property ["element"] of [server-element-component] is accessed by [app-component]. We don't want [app-component] to use property name [element] to access prpoperty [element] of [server-element-component]. So, we can give name of our choice by ["Assigning an alias to cutom properties"].

~Here, we are assigning Alias name [srvElement]

## Commit 1 and commit 2 feature is available in branch (S1/Binding-Custom-Properties)

## Commit 3 = Binding to Custom event

What if we have component and something changes out ther and we want to inform
our parent component(Parent component is component which implements our component)

Below, we are using Output decorator, b/z we are passing something out of component. We created our own event named "serverCreated" using "newEventEmitter" with the data which we will accept in app.component.html

@Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();

## Commit 3 and commit 4 feature is available in branch (S2/Binding-Custom-Event)

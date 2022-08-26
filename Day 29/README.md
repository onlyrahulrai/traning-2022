## Tasks
---
1. What is the code below going to output?
```js 
    alert(null || 2 || undefined);
```

2. What will the code below output?
```js 
    alert(alert(1) || 2 || alert(3));
```

3. What is this code going to show?
```js 
    alert(1 && null && 2);
```
4. What will this code show?
```js  
    alert(alert(1) && alert(2));
```
5.What will the result be?
```js 
    alert(null || 2 && 3 || 4);
```
6.Which of these alert's are going to execute?
```js 
    if(-1 || 0) alert('first');
    if(-1 && 0) alert("second");
    if(null || -1 && 1) alert("Third");
```

7.Write the code which asks for a login with prompt.

if the visitor enters 'Admin',then propmt for a password if the input is an empty line or Esc - show "Canceled",if it's another string - then show a don't know you.

The password is checked as follows:

* if it equals "TheMaster", then show "Welcome!",
* Another string - show "Wrong password",
* for an empty string or cancelled input, show "Cancelled"

![FlowChart](https://rahulraiofficial.w3spaces.com/flowchat_1.png)

please use nested if blocks.Mind the overall readability of the code.


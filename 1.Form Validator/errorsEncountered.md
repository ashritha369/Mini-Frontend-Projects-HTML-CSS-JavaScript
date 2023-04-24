# ERRORS ENCOUNTERED

## 1. FROM CONSOLE: [DOM] Input elements should have autocomplete attributes (suggested: "new-password"):

Resolved by:

```
Set the autocomplete attribute to off at the <form> or <input> which:
- Enforces browser to NOT store any data
- Disables caching form data in the session history
<input type="password" name="password" autocomplete="off">

```

Reference: [https://stackoverflow.com/questions/54970352/input-elements-should-have-autocomplete-attributes](https://stackoverflow.com/questions/54970352/input-elements-should-have-autocomplete-attributes)

---

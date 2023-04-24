- Used Markup from : [https://cdnjs.com/](https://cdnjs.com/)
- copied the script tag by searching 'marked' and copied 'marked' from `</>` i.e `<script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js" integrity="sha512-zAs8dHhwlTbfcVGRX1x0EZAH/L99NjAFzX6muwOcOJc7dbGFNaW4O7b9QOyCMRYBNjO+E0Kx6yLDsiPQhhWm7g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`
- used fontawesome : [https://fontawesome.com/docs/web/setup/get-started](https://fontawesome.com/docs/web/setup/get-started) (logged in with 666 gmail id) paste the unique script tag

# Local storage

- We will use local storage `localStorage.setItem(key,value)`
- Example : `localStorage.setItem('name','ashi')`
- So after setting to get the values we use `getItem()`
- `localStorage.getItem('name')`
- to check this go to 'console in browser' -> go to 'application tab'
- go to 'local storage'
- see the 'local host', click on it,
- there 'key' will be 'name', 'value' will be 'brad'
- so in order to delete is we can use removeItem() so `localStorage.removeItem('name')`
- so we can store only string in local storage, even if we try to store arrays or objects, it has to stringify.
- to pass objects or strings as value we can use `JSON.stringify()`
- `localStorage.setItem('name',JSON.stringify(obj))`
- to get it `JSON.parse(localStorage.getItem('name'))`

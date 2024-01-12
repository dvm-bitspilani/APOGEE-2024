# APOGEE-2024 Frontend code and setup

Aliases : 
1. @components
2. @routes
3. @styles
4. @src

Dependencies installed:
1. R3F
2. Drei
3. Post-processing
4. Leva
5. GSAP
6. Framer-motion
7. React router dom
8. Valtio

To use state management:
1. Add the global variable to the state.js file in the components folder.
2. Import the state and useSnapshot in the folder you need to use it in.
3. You can use
   ```javascript
   import state from "@components/state"
   ```
5. Use state variable to update the proxy state and snap to render and update it
6. Use subscribe if you want some function to run on reactivity to some particular state

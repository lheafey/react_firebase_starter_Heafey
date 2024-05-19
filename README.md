# React + Firebase

This is the initial distribution template of source code for a React project to
which you will add Firebase authentication (signup, login, logout) as well as
backend storage.  Useful links are provided below.

- https://firebase.google.com/docs/web/setup
- https://console.firebase.google.com/
- https://firebase.google.com/docs/auth/web/start
- https://firebase.google.com/docs/auth/web/start#sign_up_new_users
- https://firebase.google.com/docs/reference/node/firebase.User#updateprofile
- https://firebase.google.com/docs/reference/node/firebase.User#methods
- https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
- https://firebase.google.com/docs/auth/web/password-auth#next_steps
- https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
- https://firebase.google.com/products/storage

# Step-by-Step Instructions for Completing the Demo:
  - We won't use Redux for this app.  Why?  In short:
    > "...[a React component with local state] is perfectly fine as it is.  Seriously, it bears repeating.  Local state is fine." (see https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

    > "Dan Abramov, one of the creators of Redux, says: '...[D]on't use Redux until you have problems with vanilla React.'" (see https://redux.js.org/faq/general#when-should-i-use-redux)

## Firebase Setup:
#### https://firebase.google.com/docs/web/setup
  - Visit https://console.firebase.google.com/
    - Choose "add project"
    - Provide a project name, then contine
    - Uncheck enable analytics
    - Then continue to create project
  - To register your app, in Firebase console:
    - click </> web icon
    - crete an app nickname
    - then register app
  - In the terminal, witin the directory of your project:
    ```
    yarn add firebase
    ```
  - In VS Code, ceate a new file (e.g., `firebase.js`) and add the provided js:
    ```
    import { initializeApp } from 'firebase/app';

    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        //...
    };

    const app = initializeApp(firebaseConfig);
    ```

## Firebase authentication:
#### https://firebase.google.com/docs/auth/web/start
  - in `firebase.js`, add:
    ```
    import { getAuth } from "firebase/auth";
    ...
    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    ```

## Change Signup to Get and Display Info:
  - in `Signup.tsx`:
    - imports:
      ```
      import { auth } from "./firebase";
      ```
    - @ top of function Signup:
      ```
      const [email, setEmail] = useState("");
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      ```
    - for the three `input` elements, add new arrow function to each:
      ```
      value={username}
      onChange={(event) => setUsername(event.target.value)}
      ```
      ```
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      ```
      ```
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      ```
    - at top of function Signup, add a starter `signupUser` function:
      ```
      const signupUser = (event) => {
         console.log(auth);
         console.log(email);
         console.log(password);
      }
    - then for the `button` element, add that function for `onClick`:
      ```
      onClick={signupUser}
      ```
  - try, and click "signup" and should see in console!
    
## Signing Up New Users:
#### https://firebase.google.com/docs/auth/web/start#sign_up_new_users

(NB: successful sign up automatically logs in the user)
  - in Firebase console:
    - set sign-up method
    - choose "email/password"
    - enable email/password then 'Save'
  - in `Signup.tsx`:
    - imports:
      ```
      import { createUserWithEmailAndPassword } from "firebase/auth";
      ```
    - at top of function Signup:
      ```
      const signupUser = (event) => {
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              // https://firebase.google.com/docs/reference/node/firebase.auth#usercredential
              // https://firebase.google.com/docs/reference/node/firebase.User
              const user = userCredential.user;
              console.log(userCredential);
              console.log("user with email " + user.email + " created!");
              // note:  have to update account with username after creation
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
          });
      };
      ```
  - try, and then reload Firebase console -- should see user!

## Updating User Account to Include Username:
#### https://firebase.google.com/docs/reference/node/firebase.User#updateprofile
  - within `createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {`:
    ```
    updateProfile(user, { displayName: username }).then(
        () => {console.log(user.displayName);}
    );
    ```
  - NB : can update other things about account:
    https://firebase.google.com/docs/reference/node/firebase.User#methods

## Updating Elements on the Page Whenever a User is Logged In:
#### https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
  - in `UserDisplay.tsx`:
    - imports:
      ```
      import { auth } from "./firebase";
      import { onAuthStateChanged } from "firebase/auth";
      ```
    - @ top of UserDisplay function:
      ```
      const [currentUser, setCurrentUser] = useState(null);

      // https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
      // set a listener to know when user changes
      onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in,
              const uid = user.uid;
              setCurrentUser(user);
          } else {
              // User is signed out
              setCurrentUser(null);
          }
      });
      ```
    - in div @ bottom, add a span with text about who (if anyone) is logged in:
      ```
      <span>
          {currentUser ?
              currentUser.displayName + " <--> " + currentUser.email
              : "No one logged in"}
      </span>

## Allowing a User to Log Out:
#### https://firebase.google.com/docs/auth/web/password-auth#next_steps
  - in `Logout.tsx`:
    - imports:
      ```
      import { auth } from "./firebase";
      import { signOut } from "firebase/auth";
      ```
    - @ top of Logout function, add a new arrow function that calls Firebase's `signOut`:
      ````
      const signoutUser = (event) => {
          event.preventDefault();
          signOut(auth)
          .then(() => {
              // Sign-out successful.
              console.log("user logged out");
          })
          .catch((error) => {
              // An error happened.
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
          });
      };
    - then for the `button` element, add that function for `onClick`:
      ```
      onClick={signoutUser}
      ```

## Allowing Previous User to Log In:    
#### https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password    
  - in `Login.tsx`:
    - imports:
      ```
      import { auth } from "./firebase";
      import { signInWithEmailAndPassword } from "firebase/auth";
      ```
    - @ top of Login function, create two variables/setters along with a function to call Firebase's `signInWithEmailAndPassword` function:
      ```
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const loginUser = (event) => {
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user.email + " logged in");
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
          });
      };
      ```
    - for the two `input` elements, add:
      ```
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      ```
      ```
      value={password}
      onChange={(event) => setPassword(event.target.value)}
      ```
    - then for the `button` element, add that function for `onClick`:
      ```
      onClick={loginUser}
      ```
## React-side App Mods for Cloud Storage:
  - start by creating an Uploader component and adding to App
  - in `App.tsx`:
    - change height of `container-div` to `h-[750px]`
    - imports: 
      ```
      import Uploader from "./Uploader";
      ```
    - in function App:
      ```
          ...
          <UserDisplay />
          <Uploader />
      </div>
      ```
  - in `Uploader.tsx`:
    - in Uploader function:
      ```
      <div className="m-auto">
          <input type="file" multiple />
          <button className="signup-login-button">
              Upload
          </button>
      </div>
      ```
    - @ top of Uploader's function:
      ```
      const [fileToUpload, setFileToUpload] = useState("");
      ```
    - in `input` element, add:
      ```
      onChange={(event) => setFileToUpload(event.target.files[0])}
      ```
    - in `button` element, add:
      ```
      onClick={uploadFile}
      ```
    - near top of Uploader's function, add:
      ```
      const uploadFile = (event) => {
          // File object: https://developer.mozilla.org/en-US/docs/Web/API/File
          console.log("uploading " + fileToUpload.name);
      };
      ```
## Set up Cloud Storage:
#### https://console.firebase.google.com/u/0/
  - Visit the Firebase Console, and then:
    - choose a project
    - choose Storage (store & retrieve user generated content)
    - select "Get Started"
    - select "Start in test mode"
    - select "Next"
    - choose a cloud storage location
      - I chose us-east4: northern VA
      - https://firebase.google.com/docs/projects/locations#location-r)
    - select "Done"
  - in the Firebase Storage console, choose Rules tab:
    - copy and paste content-owner-only ___for Storage___ rule @ https://firebase.google.com/docs/rules/basics?authuser=0#content-owner_only_access
    - then modify as follows to allow:
      - any app-authenticated user
      - on this specific app
      ```
      ***************************************
      service firebase.storage {
	      match /b/learn-firebase-ac04e.appspot.com/o {
              // Files look like: "user/<UID>/path/to/file.txt"
              match /{allPaths=**} {
    	          allow read, write: if request.auth != null;
              }
          }
      }
      ***************************************
      ```
    - then Publish
  - in Firebase Storage console, choose Files tab:
    - https://firebase.google.com/docs/storage/web/start?hl=en&authuser=0#add-bucket-url
    - copy project URL to clipboard (at top of tab)
  - in `firebase.js`:
    - imports:
      ```
      import { getStorage, ref } from "firebase/storage";
      ```
    - inside `const firebaseConfig`, add (if not already present):
      ```
      storageBucket: __paste URL from clipboard__
      ```
    - @ bottom, add:
      ```
      // Get a reference to the storage service, used to create references in your storage bucket
      export const storage = getStorage(app);

      // Create a storage reference from our storage service
      export const storageRef = ref(storage);
      ```
    - NB: with the above, we are creatinge a reference (pointer to entry in the cloud): https://firebase.google.com/docs/storage/web/create-reference?hl=en&authuser=0#create_a_reference

## Uploading a file to Cloud Storage:
#### https://firebase.google.com/docs/storage/web/upload-files?authuser=0&hl=en#upload_files
 - in `Uploader.tsx`:
   - imports:
     ```
     import { storageRef } from "./firebase";
     import { ref, uploadBytes } from "firebase/storage";
     ```
   - in `uploadFile` function:
     - create a Firebase reference to the selected file:
       ```
       const uploadRef = ref(storageRef, "files/" + fileToUpload.name);
       ```
     - then call `uploadBytes` to actually upload the file:
       ```
       uploadBytes(uploadRef, fileToUpload).then((snapshot) => {
           console.log("Uploaded file " + fileToUpload.name + " to Cloud Storage!");
       });
       ```
  - the inspect the list of files on the Firebase console

## Next Steps:  Downloading & Displaying
  - https://firebase.google.com/docs/storage/web/download-files?hl=en&authuser=0
  - https://youtu.be/YOAeBSCkArA?t=962
        



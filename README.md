## 🦎🎨 opea

React & Node.js full-stack authentication for a color picking web app --written in TypeScript.


### 👩‍🍳Recipe:
 #### Frontend:
  * Mantine for UI components
  * Radix-UI icons
  * Axios for services
  * Unsplash API for randomized backgrounds
 #### Backend:
  * BCrypt for encrypting passwords
  * Mongoose for interacting with the MongoDB Atlas data base
  * Joi for data validation
  * JWT for creating authentication tokens
  * Nodemon for better server management
### 🗝️Key Feats:
  * Joi data validation for the backend 
  ```js
  const bucketSchema = {
  name: Joi.string().alphanum().min(4).max(15).required(),
  description: Joi.string().alphanum().min(4).max(50).required(),
};
  ```
  * mongoose DB schema uses TypeScript types to impose accepted color outputs and formats
  ```js
    preferredColorFormat: { type: String, enum: ColorFormatsArray },
    preferredColorOutput: { type: String, enum: ColorOutputsArray },
  ```
  ,where the accepted colors are:
  ```js
  export const ColorFormatsArray = ["RGB", "HSL", "HSV", "CMYK"] as const;
  export const ColorOutputsArray = [
  "HEX",
  "HTML",
  "GLSL",
  "Java RGB",
  "SwiftUI RGB",
  "Android sRGB",
] as const;
  ```
  * custom JWT hook that validates the JWT token each time the page is accessed. On the backend endpoint, the given fn is called:
  ```js
  export const checkUser = (req: any, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ID,
      async (error: any, decodedToken: any) => {
        if (error) {
          res.json({ status: false });
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) res.json({ status: true, user: user.username });
          else res.json({ status: false });
        }
      }
    );
  }
}
  ```
 * randomized custom background provided by the unsplash API:
 
 ![Screenshot 2023-05-10 at 13 05 15](https://github.com/laprinia/opea/assets/51471463/7f65a487-d8ba-4577-aa18-525c194c2690)
 * glassmorphism components using custom CSS inside Mantine comps:
 
 ![Screenshot 2023-05-15 at 13 49 10](https://github.com/laprinia/opea/assets/51471463/1967c82a-7be2-427d-a63c-ef1889d1d870)
 ```js
 sx={{
        background: `rgba(24,24,24,0.5)`,
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        backdropFilter: `blur(5px)`,
      }}
  ```
 * field as well as form validation for register function:
 
 ![Screenshot 2023-05-15 at 14 14 04](https://github.com/laprinia/opea/assets/51471463/fe8897e2-3138-48ba-8408-0fae482c14be)

 
### ⏳Register Flow:


https://github.com/laprinia/opea/assets/51471463/fcaed0f3-1607-4fce-9e5c-ff72b1642bc8



### ⏳Login Flow:


https://github.com/laprinia/opea/assets/51471463/4110d372-e1dc-4a2a-8a8b-7e1cd41dabff





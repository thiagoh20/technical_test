require("dotenv").config(); // Secures variables
const app = require("./utils/app"); // Backend App (server)
const mongo = require("./utils/mongo"); // MongoDB (database)
const { PORT } = require("./constants");
const platformRoutes = require("./routes/platform");


async function bootstrap() {
  await mongo.connect();

  app.get("/", (req, res) => res.status(200).json({ message: "technical test" }));
  app.get("/health", (req, res) => res.status(200).send());
  app.use("/platforms", platformRoutes);
 

  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`);
  });
}

bootstrap();

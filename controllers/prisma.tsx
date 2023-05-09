import response from "express";
import fs from "fs";
import util from "util";
import exec from "child_process";
const execCommand = util.promisify(exec.exec);

export const buildPrismaFile = async (req, res = response) => {
  try {
    const contentFile = req.body.contentFile;
    const filename = "schema.prisma";
    const inputFolder = "./prisma";
    if (!fs.existsSync(inputFolder)) {
      await fs.promises.mkdir(inputFolder);
    }
    await fs.promises.writeFile(
      inputFolder + "/" + filename,
      contentFile,
      "utf8"
    );

    await execCommand("npx prisma migrate dev --name init");
    return res.status(200).json({
      response: true,
    });
  } catch {
    return res.status(400).json({
      response: false,
    });
  }
};

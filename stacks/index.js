import StorageStack from "./StorageStacks";

export default function main(app) {
  // Set default runtime for all functions
  // app.setDefaultFunctionProps({
  //   runtime: "nodejs14.x"
  // });

  new StorageStack(app, 'storage');
}

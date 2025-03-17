import "https://unpkg.com/@rive-app/canvas";

// ---------------------------------
// The layout of the graphic will adhere to
const layout = new rive.Layout({
  fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
  alignment: rive.Alignment.Center,
});

// ---------------------------------
// HTML Canvas element to render to
const riveCanvas = document.getElementById("rive-canvas");

// ---------------------------------
// Re-adjust the rendering surface if the window resizes
window.addEventListener(
  "resize",
  () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
  false
);

// ---------------------------------
// Cleanup Rive
//
// When creating a Rive instance, you need to ensure that it gets cleaned up.
// This should happen in scenarios where you no longer want to show the Rive canvas,
// for example, where:
// - UI with Rive Animations is no longer necessary (i.e. a modal with Rive graphics is closed)
// - The animation or state machine has completed and will no longer ever be run/shown

// NOTE: This function is not called in this example.
function cleanUpRive() {
  riveInstance.cleanup();
}

// -------------------------------------------------------
// ---- [START - OPTION 1]
// ---- LOCAL RIVE EXAMPLE
// Loads a .riv file from local resources.
// Set this as the src attribute when creating a new Rive instance.

// --[EXAMPLE FROM HERE]
const riveInstance = new rive.Rive({
  // Load a local riv `clean_the_car.riv` or upload your own!
  src: "character_animation.riv",
  // Be sure to specify the correct state machine (or animation) name
  stateMachines: "Motion", // Name of the State Machine to play
  canvas: riveCanvas,
  // artboard: "Artboard" // Optionally provide the artboard to display
  layout: layout, // This is optional. Provides additional layout control.
  autoplay: true,
  onLoad: () => {
    // Prevent a blurry canvas by using the device pixel ratio
    riveInstance.resizeDrawingSurfaceToCanvas();
    riveInstance.enableFPSCounter();
  },
});

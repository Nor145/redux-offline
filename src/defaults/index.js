import persist from "./persist";
import detectNetwork from "./detectNetwork";
import effect from "./effect";
import batch from "./batch";
import retry from "./retry";
import discard from "./discard";
import effectResultMiddleware from "./effectResultMiddleware";

export default {
  rehydrate: true,
  persist,
  detectNetwork,
  batch,
  effect,
  effectResultMiddleware,
  retry,
  discard
};

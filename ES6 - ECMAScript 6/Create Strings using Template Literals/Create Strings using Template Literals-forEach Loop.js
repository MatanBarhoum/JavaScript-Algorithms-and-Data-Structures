const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  const failureItems = [];
  result.failure.forEach(message => failureItems.push(`<li class="text-warning">${message}</li>`))
  return failureItems;
}

const failuresList = makeList(result.failure);

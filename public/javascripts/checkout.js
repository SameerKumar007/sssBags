// Simulated token generation function
function simulateTokenGeneration() {
  return new Promise((resolve) => {
    // Simulate token generation
    const fakeToken = { id: 'fake_token_id' };
    resolve(fakeToken);
  });
}

// Handle form submission.
const $form = $("#checkout-form");

$form.submit(function (event) {
  event.preventDefault();
  $form.find("button").prop("disabled", true);

  simulateTokenGeneration().then(function (result) {
    // Simulate successful token generation
    stripeTokenHandler(result);
  });
});

// Simulated token handler function
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  $form.append($('<input type="hidden" name="stripeToken" />').val(token.id));
  // Submit the form
  $form.get(0).submit();
}

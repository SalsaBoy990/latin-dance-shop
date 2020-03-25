document.onload(function(event) {
  var weeks = document.getElementById("validInWeeks").innerText
  const numWeeks = parseInt(weeks, 10)
  if (isNaN(numWeeks)) {
    throw new Error(
      "The valid number of weeks is not a number. Check your markdown files."
    )
  }

  var validDate = new Date()
  validDate.setDate(validDate.getDate() + numWeeks * 7)

  var zeroMonth =
    validDate.getMonth() + 1 < 10
      ? "0" + (validDate.getMonth() + 1).toString()
      : (validDate.getMonth() + 1).toString()
  var zeroDate =
    validDate.getDate() < 10
      ? "0" + validDate.getDate().toString()
      : validDate.getDate().toString()

  document.getElementById("validDate").innerText =
    "Érv.: " +
    validDate.getFullYear() +
    ". " +
    zeroMonth +
    ". " +
    zeroDate +
    ".-ig"
})

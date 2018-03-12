(function () {
    var leftRightWholeRadioButtons = document.querySelectorAll('input[type=radio][value=WHOLE], input[type=radio][value=LEFT], input[type=radio][value=RIGHT]');
    var noneRadioButtons = document.querySelectorAll('input[type=radio][value=NONE]');

    function getX2Checkbox(name) {
        var checkboxName = name.replace("ingredientSide", "x2");
        return document.querySelector('input[type=checkbox][name="' + checkboxName + '"]');
    }

    function activateX2(name) {
        getX2Checkbox(name).disabled = false;
    }

    function disableX2(name) {
        getX2Checkbox(name).disabled = true;
    }

    for (var i = 0; i < leftRightWholeRadioButtons.length; i++) {
        (function (i) {
            leftRightWholeRadioButtons[i].onclick = function () {
                activateX2(leftRightWholeRadioButtons[i].name);
            };
        })(i);
    }

    for (var i = 0; i < noneRadioButtons.length; i++) {
        (function (i) {
            noneRadioButtons[i].onclick = function () {
                disableX2(noneRadioButtons[i].name);
            };
        })(i);
    }
})();
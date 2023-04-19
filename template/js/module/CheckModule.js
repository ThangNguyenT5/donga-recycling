export default function CheckModule() {
    const recheckBlocks = document.querySelectorAll(".recheck-block");
    if (recheckBlocks) {
        recheckBlocks.forEach((item) => {
            const recheckItems = item.querySelectorAll(".recheck-item");
            const recheckInputs = item.querySelectorAll(".recheck-input");

            recheckItems.forEach((item) => {
                item.addEventListener("click", () => {
                    const input = item.querySelector(".recheck-input");
                    if (input.type == "radio") {
                        recheckInputs.forEach((item) => {
                            item.checked = false;
                        });
                        input.checked = true;
                    }
                    if (input.type == "checkbox") {
                        if (input.checked == true) {
                            input.checked = false;
                        } else {
                            input.checked = true;
                        }
                    }
                    var event = new Event("change");
                    input.dispatchEvent(event);
                });
            });
        });
    }
}
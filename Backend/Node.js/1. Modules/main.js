// main.js
function printPattern() {
    let count = 0;
    console.log("\n🧑‍💻 Pattern is printing...");

    setTimeout(() => {
        console.log("✅ Pattern Printing Done");
    }, 2700);

    // 🔷 Triangle Increasing
    const step1 = setInterval(() => {
        count++;
        console.log("⭐".repeat(count));
        if (count === 10) {
            clearInterval(step1);
            count = 0;

            // 🔷 Triangle Decreasing
            const step2 = setInterval(() => {
                count++;
                console.log("⭐".repeat(10 - count));
                if (count === 10) {
                    clearInterval(step2);
                    count = 0;

                    // 🔷 Right-Aligned Triangle Increasing
                    const step3 = setInterval(() => {
                        count++;
                        const stars = "⭐".repeat(count);
                        const spaces = " ".repeat(10 - count);
                        console.log(spaces + stars);
                        if (count === 10) {
                            clearInterval(step3);
                            count = 0;

                            // 🔷 Right-Aligned Triangle Decreasing
                            const step4 = setInterval(() => {
                                count++;
                                const stars = "⭐".repeat(10 - count);
                                const spaces = " ".repeat(count);
                                console.log(spaces + stars);
                                if (count === 10) {
                                    clearInterval(step4);
                                }
                            }, 50);
                        }
                    }, 50);
                }
            }, 50);
        }
    }, 50);
}

module.exports = printPattern;

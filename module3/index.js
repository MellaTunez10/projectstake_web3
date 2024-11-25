async function textFile(txt) {
    let lines = files.map(async fileName => {
        return fileName + ": " +
            (await textFile(fileName)).length;
    });
    return (await Promise.all(lines)).join("\n");
}

async function activityTable(day) {
    // Read the list of log files from the camera_logs.txt file
    let logFileList = await textFile("camera_logs.txt");
    let logFiles = logFileList.split("\n").filter(Boolean); // Split by new lines and filter out empty lines
    let hourCounts = Array(24).fill(0); // Initialize an array to hold counts for each hour

    // Process each log file
    for (const logFile of logFiles) {
        const logContent = await textFile(logFile); // Read the content of the log file
        const timestamps = logContent.split("\n").filter(Boolean); // Split and filter timestamps

        // Count occurrences for the specified day
        timestamps.forEach(timestamp => {
            const date = new Date(Number(timestamp)); // Convert timestamp to Date object
            if (date.getDay() === day) { // Check if the day matches
                const hour = date.getHours(); // Get the hour of the day
                hourCounts[hour]++; // Increment the corresponding hour count
            }
        });
    }

    return hourCounts; // Return the array with counts for each hour
}

// Example usage:
activityTable(1) // For Monday
    .then(table => console.log(activityGraph(table)));
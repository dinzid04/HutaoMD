const chalk = require('chalk')
const loading = async () => {
    return new Promise((resolve) => {
        let progress = 0;
        const barLength = 30;

        const timer = setInterval(() => {
            progress += 5; 
            const safeProgress = progress > 100 ? 100 : progress;


            const filledLength = Math.round((barLength * safeProgress) / 100);
            const emptyLength = barLength - filledLength;


            const safeEmptyLength = emptyLength < 0 ? 0 : emptyLength;

            
            const filled = '█'; 
            const empty = '░';
            
           
            const bar = filled.repeat(filledLength) + empty.repeat(safeEmptyLength);
            
            
            process.stdout.write(`\r${chalk.yellow('🔥 Loading spirit...')} [${chalk.red(bar)}] ${chalk.magenta(safeProgress + '%')}`);

    
            if (progress >= 100) {
                clearInterval(timer); 
                process.stdout.write('\n'); 
                console.log(chalk.green('✅ System Ready!'));
                
           
                setTimeout(() => {
                    console.clear();
                    resolve(); 
                }, 800);
            }
        }, 100);
    });
}

module.exports = { loading }

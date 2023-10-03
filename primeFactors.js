function primeFactors(num) {
let factors = [];

for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
        factors.push(i)
    }
    
}

    let isPrime = function(factor) {
        if (factor === 2) {
            return true;
        }else if (factor >= 3) {
            for (let i = 2; i < Math.sqrt(factor); i++) {
                if (factor % i === 0) {
                    return false;
                }

            }
            return true;
        }

        }
        let primes = []
        for (let i = 0; i <= factors.length; i++) {
            if (isPrime(i)) {
                primes.push(i)
            }

        }
        console.log(primes)
        return Math.max(primes)
    }
    console.log(primeFactors(87923000))


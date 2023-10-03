def largest_prime_factor(n):
	i=2
	factors=[]
	while i*i<=n:
		if n % i:
			i += 1
		else:
			n //= i
			factors.append(i)
	if n> 1:
		factors.append(n)
	return max(factors)
print(largest_prime_factor(600851475143))
export function getCityCountry(address: string) {
    const parts = address.split(',').map(part => part.trim());
  
    const country = parts[parts.length - 1];
    const city = parts[parts.length - 2];
  
    return { city, country };
  }
  
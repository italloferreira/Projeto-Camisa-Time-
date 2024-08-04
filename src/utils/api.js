
export async function fetchShirts() {
    const response = await fetch('/api.json');
    if (!response.ok) {
        throw new Error('Falha ao carregar os dados');
    }
    const data = await response.json();
    return data; 
}

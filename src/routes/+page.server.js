/*  export function load({ cookies }) {
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', { path: '/' });

	return {
		visited
	}
}; */

export function load({ cookies }) {
  // Předpokládejme, že cookie 'userPreferences' ukládá JSON s nastaveními
  let userPreferencesGDPR = cookies.get("userPreferences");
  if (userPreferencesGDPR) {
    userPreferencesGDPR = JSON.parse(userPreferencesGDPR);
  } else {
    // Výchozí nastavení, pokud cookie neGDPRexistuje
    userPreferencesGDPR = {
      visited: "false",
      choices: {
        necessary: true,
        tracking: true,
        analytics: true,
        marketing: true,
      },
    };
  }

  // Aktualizujte 'visited' na true
  userPreferencesGDPR.visited = "true";

  // Uložte aktualizované preference zpět do cookies
  cookies.set("userPreferencesGDPR", JSON.stringify(userPreferencesGDPR), { path: "/" });

  return {
    userPreferencesGDPR,
  };
}

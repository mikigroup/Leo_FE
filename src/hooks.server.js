/* export async function handle({ request, resolve }) {
  const cookies = request.headers.cookie || "";
  const consent = cookies
    .split(";")
    .find((c) => c.trim().startsWith("beyonk_gdpr="))
    ?.split("=")[1];
  // Zpracování requestu s přihlédnutím k souhlasu
  const response = await resolve(request);
  // Nastavení cookie, pokud ještě neexistuje
  if (!consent) {
    response.headers["set-cookie"] = `beyonk_gdpr=true; Path=/; HttpOnly`;
  }

  return response; 
};*/

/* export async function handle({ request, resolve }) {
  const response = await resolve(request);
  // Další logika zde
  return response;
}; */

/** @type {import('@sveltejs/kit').Handle} */
/* export async function handle({ event, resolve }) {
	event.locals.user = await getUserInformation(event.cookies.get('sessionid'));

	const response = await resolve(event);
	response.headers.set('x-custom-header', 'potato');

	return response;
}
 */


/* export function load({ cookies }) {
  const visited = cookies.get("visited");

  cookies.set("visited", "true", { path: "/" });

  return {
    visited,
  }
};
 */
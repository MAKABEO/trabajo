exports.registro = function(request, response)
{
	var registrados = require("./datos");

	var usuario = request.param('username');
	var contrasena = request.param('password');

	var tamanio = registrados.USERNAME.length;
	var encontrado = false;

	console.log('Parametro por post ' + usuario  + ' ' + contrasena);

	for(i = 0; i < tamanio; i++)
	{
		if(usuario == registrados.USERNAMES[i] && contrasena == registrados.PASSWORDS[i])
		{
			encontrado = true;
		}
	}
	if(encontrado)
	{
		response.render( 'logon' );
	}
	else
	{
		response.render( 'fail' );
	}
};
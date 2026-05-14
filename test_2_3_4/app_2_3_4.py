from flask import Flask,render_template
app = Flask(__name__)
@app.route("/colection")

@app.route("/coleccion")
def ver_coleccion():
    # Creamos una lista de diccionarios con datos de prueba
    mis_favoritos = [
            {"nombre": "Zelda", "categoria": "Aventura"},
        {"nombre": "Mario", "categoria": "Plataformas"},
        {"nombre": "Metroid", "categoria": "Acción"}
    ]
    # Enviamos la lista completa a la plantilla con el nombre 'items'
    return render_template("galeria.html", items=mis_favoritos)

    # Comprobamos si el script se está ejecutando directamente (y no importado como módulo)
if __name__ == "__main__":
    # Arrancamos el servidor en modo debug para que se reinicie solo al guardar cambios
    app.run(debug=True)
import sqlite3

DB_PATH = "/home/emardom0111/Escritorio/test_2_3_5/reto_Esteban.db"

def main():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    # Recrea la tabla LOGS (elimina si existe) y crea 30 filas de ejemplo
    cur.execute("DROP TABLE IF EXISTS LOGS")
    cur.execute("""
        CREATE TABLE LOGS (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            evento TEXT NOT NULL
        )
    """)

    eventos = [
        "Evento 1: Inicio del sistema",
        "Evento 2: Usuario conectado",
        "Evento 3: Error de lectura de archivo",
        "Evento 4: Backup programado completado",
        "Evento 5: Nueva entrada registrada",
        "Evento 6: Sesión finalizada",
        "Evento 7: Actualización de configuración",
        "Evento 8: Conexión perdida con servidor",
        "Evento 9: Reintento de conexión",
        "Evento 10: Archivo cargado",
        "Evento 11: Archivo eliminado",
        "Evento 12: Permiso denegado",
        "Evento 13: Permiso concedido",
        "Evento 14: Analítica procesada",
        "Evento 15: Notificación enviada",
        "Evento 16: Usuario registrado",
        "Evento 17: Cambio de contraseña",
        "Evento 18: Intento de acceso fallido",
        "Evento 19: Restauración de datos",
        "Evento 20: Dependencia instalada",
        "Evento 21: Prueba automatizada pasada",
        "Evento 22: Prueba automatizada fallida",
        "Evento 23: Servicio reiniciado",
        "Evento 24: Memoria alta detectada",
        "Evento 25: CPU elevada detectada",
        "Evento 26: Limpieza de logs",
        "Evento 27: Migración completada",
        "Evento 28: Nuevo API registrado",
        "Evento 29: Latencia elevada detectada",
        "Evento 30: Cierre programado"
    ]

    cur.executemany("INSERT INTO LOGS (evento) VALUES (?)", [(e,) for e in eventos])

    conn.commit()
    conn.close()
    print(f"Base de datos creada en: {DB_PATH} (tabla LOGS con 30 eventos)")

if __name__ == "__main__":
    main()
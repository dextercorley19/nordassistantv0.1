import yaml
import psycopg_pool

config = yaml.safe_load(open("./config.yaml"))


conninfo = f"host={config['db_host']} port={config['db_port']} dbname={config['db_dbname']} user={config['db_user']} password={config['db_password']}"

pool = psycopg_pool.AsyncConnectionPool(conninfo=conninfo, open=False)


async def test_pool():
    async with pool.connection() as conn:
        async with conn.cursor() as cursor:
            await cursor.execute("SELECT * FROM test")
            results = await cursor.fetchall()
            return results
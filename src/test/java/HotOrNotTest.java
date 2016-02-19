import static org.junit.Assert.*;

import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.HotOrNot.JDBCDatabaseManager;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class HotOrNotTest {
private JDBCDatabaseManager dbm;
	
	@Before
	public void setUp() throws SQLException{
		Connection c = DriverManager.getConnection("jdbc:h2:tcp://localhost/~/test","sa","sa");
	
		dbm = new JDBCDatabaseManager(c);	
	}
	
	@After
	public void tearDown() throws SQLException{
		dbm.getConnection().close();
	}
	

	@Test
	public void testAverages() throws Exception {
		PrintWriter writer = new PrintWriter("HotOrNotReport.csv", "UTF-8");
		for(String line : dbm.getAverages())
			writer.println(line);
		
		writer.close();
	}

}

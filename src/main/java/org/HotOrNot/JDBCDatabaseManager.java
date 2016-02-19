package org.HotOrNot;


import java.sql.Connection;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.HotOrNot.model.EntityType;
import org.HotOrNot.model.VotableEnt;



public class JDBCDatabaseManager  {

	private Connection connection;
	
	public JDBCDatabaseManager(Connection connection) throws SQLException {
		this.connection = connection;
	}
	
	public Connection getConnection(){
		return this.connection;
	}
	
	public void clean() throws Exception{
		 Statement stmt = connection.createStatement();
         stmt.executeUpdate("delete from VOTABLEENT");
	}
	
	
	
	public ArrayList<String> getAverages() throws Exception{
			Statement s = connection.createStatement();
			ResultSet set = s.executeQuery("SELECT AVG(HOTORNOT)  AS Average,  ENTITYTYPE FROM VOTABLEENT GROUP BY ENTITYTYPE ");
			ArrayList<String> result = new ArrayList<String>();
			
			while(set.next())
				result.add(((EntityType.values()[set.getInt("ENTITYTYPE")])).toString()+ "," +set.getInt("AVERAGE"));
			
			return result;
	
	}


	
}

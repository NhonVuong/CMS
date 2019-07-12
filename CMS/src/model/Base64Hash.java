package model;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.xml.bind.DatatypeConverter;

import org.apache.tomcat.util.codec.binary.Base64;

import sun.misc.BASE64Encoder;

public class Base64Hash {
	//private final MessageDigest md;

//	  public Base64Hash() throws SecurityException {
//	    try {
//	      md = MessageDigest.getInstance("MD5", "SUN");
//	    }catch(Exception se) {
//	      throw new SecurityException("In MD5 constructor " + se);
//	    }
//	  }
	  String toMD5(String input) {
		    MessageDigest md;
			try {
				md = MessageDigest.getInstance("MD5");
				   byte[] raw = md.digest(input.getBytes());
				    return DatatypeConverter.printHexBinary(raw);
			} catch (NoSuchAlgorithmException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return"";
			}
		 
		}
//	  public String encode(String in) throws Exception {
//	    if (in == null) {
//	      return null;
//	    }
//	    try {
//	      byte[] raw = null;
//	      byte[] stringBytes = null;
//	      stringBytes = in.getBytes("UTF8");
//	      synchronized(md) {
//	        raw = md.digest(stringBytes);
//	      }
//	      BASE64Encoder encoder = new BASE64Encoder();
//	      return encoder.encode(raw);
//	    } catch (Exception se) {
//	      throw new Exception("Exception while encoding " + se);
//	    }
//
//	  }

	

	  /**
	   * Test harness
	   * @param args
	   */
	  public String encodeBase64(String pass)
	  {
		  byte[] bytesEncoded = Base64.encodeBase64(pass.getBytes());
		  return new String(bytesEncoded);
	  }
	  public String decodeBase64(String pass)
	  
	  {
		  
		  byte[] valueDecoded = Base64.decodeBase64(pass.getBytes());
		  return new String(valueDecoded);
	  }
//	  public static void main(String[] args) {
//	     String clearText = "apple";
//	    try {
//	    	MD5Hash app = new MD5Hash();
//	      String encryptedHash = app.encode(clearText);
//	      System.out.println(encryptedHash);
//	    } catch (Exception e) {
//	      e.printStackTrace();
//	    }
//
//	  }
}

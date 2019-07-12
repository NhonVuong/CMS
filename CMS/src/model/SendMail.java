package model;

import java.util.*;  
import javax.mail.*;  
import javax.mail.internet.*;
import javax.xml.bind.DatatypeConverter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.Claim;
import com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithm;

import javax.activation.*;
import javax.crypto.spec.SecretKeySpec;
public class SendMail {
	public static void send(String toMail,String mailSubject,String msg)
	{
		String from = "dat.vo999@gmail.com"; 
		   Properties prop = new Properties();
		      prop.put("mail.smtp.auth", true);
		      prop.put("mail.smtp.starttls.enable", "true");
		      prop.put("mail.smtp.host", "smtp.gmail.com");
		      prop.put("mail.smtp.port", "587");
		      prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
		      Session session = Session.getInstance(prop, new Authenticator() {
		    	    @Override
		    	    protected PasswordAuthentication getPasswordAuthentication() {
		    	        return new PasswordAuthentication(from, password);
		    	    }
		    	});

		      Message message = new MimeMessage(session);
		      try {
				message.setFrom(new InternetAddress(from));
				  message.setRecipients(
					        Message.RecipientType.TO, InternetAddress.parse(toMail));
					      message.setSubject(mailSubject);
					       
//					     https://myaccount.google.com/u/1/lesssecureapps?pli=1
					       
					      MimeBodyPart mimeBodyPart = new MimeBodyPart();
					      mimeBodyPart.setContent(msg, "text/html");
					       
					      Multipart multipart = new MimeMultipart();
					      multipart.addBodyPart(mimeBodyPart);
					       
					      message.setContent(multipart);
					       
					      Transport.send(message);
					      System.out.println("message sent successfully....");  
			} catch (MessagingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	}
	public static String getRandomNumberString() {
	    // It will generate 6 digit random Number.
	    // from 0 to 999999
	    Random rnd = new Random();
	    int number = rnd.nextInt(999999);

	    // this will convert any number sequence into 6 character.
	    return String.format("%06d", number);
	}
	
	
	public static void main(String [] args){  
	      String to = "dat.vo777@gmail.com";//change accordingly  
	      String from = "dat.vo999@gmail.com"; 
	      String host = "localhost";//or IP address  
	  
	     //Get the session object  
//	      Properties properties = System.getProperties();  
//	      properties.setProperty("mail.smtp.host", host);  
//	      properties.put("mail.smtp.ssl.enable", "true");
///	      Session session = Session.getDefaultInstance(properties);  //loi port 25
	   //   Session session = Session.getInstance(properties);
	     //compose the message  
	      Properties prop = new Properties();
	      prop.put("mail.smtp.auth", true);
	      prop.put("mail.smtp.starttls.enable", "true");
	      prop.put("mail.smtp.host", "smtp.gmail.com");
	      prop.put("mail.smtp.port", "587");
	      prop.put("mail.smtp.ssl.trust", "smtp.gmail.com");
	      Session session = Session.getInstance(prop, new Authenticator() {
	    	    @Override
	    	    protected PasswordAuthentication getPasswordAuthentication() {
	    	        return new PasswordAuthentication(from, password);
	    	    }
	    	});

	      Message message = new MimeMessage(session);
	      try {
			message.setFrom(new InternetAddress(from));
			  message.setRecipients(
				        Message.RecipientType.TO, InternetAddress.parse(to));
				      message.setSubject("Mail Subject");
				       
				      String msg = "This is my first email using JavaMailer";
				       
				      MimeBodyPart mimeBodyPart = new MimeBodyPart();
				      mimeBodyPart.setContent(msg, "text/html");
				       
				      Multipart multipart = new MimeMultipart();
				      multipart.addBodyPart(mimeBodyPart);
				       
				      message.setContent(multipart);
				       
				      Transport.send(message);
				      System.out.println("message sent successfully....");  
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	    
	   } 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	static String password="quyettamquamon";
}

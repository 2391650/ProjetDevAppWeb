package frognest.tech.backend.Chrome;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

// @author Alex
@SpringBootTest
public class ChromeTest {
    WebDriver driver = new ChromeDriver();

    @BeforeEach
    public void setUp(){
        System.setProperty("webdriver.chrome.driver", "./data/chromedriver.exe");
    }

    @Test
    public void Register() {
        driver.get("http://localhost:5173/signUp");

        WebElement usernameInput = driver.findElement(By.id("username"));
        WebElement passwdInput = driver.findElement(By.id("passwd"));
        WebElement signupBtn = driver.findElement(By.id("signupBtn"));

        usernameInput.sendKeys("alexandros");
        passwdInput.sendKeys("123");
        signupBtn.click();

    }

}

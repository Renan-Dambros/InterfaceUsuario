package mission;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.scene.control.Alert;

public class FXMLDocumentController implements Initializable {

    @FXML
    private Button BT1;

    @FXML
    private ImageView imageView;

    @FXML
    private Button BT2;

    @Override
    public void initialize(URL url, ResourceBundle rb) {
        
    }

    @FXML
    private void handleButtonAction(ActionEvent event) {
        System.out.println("Fetching image from API...");

        try {
            URL url = new URL("https://picsum.photos/400/350");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();

            if (responseCode == HttpURLConnection.HTTP_OK) {

                try (
                        InputStream inputStream = connection.getInputStream()) {

                    Image image = new Image(inputStream);

                    imageView.setImage(image);

                }
            } else {
                System.out.println("Failed to fetch image. Response Code: " + responseCode);
            }

            connection.disconnect();
        } catch (IOException e) {
            e.getMessage();
        }
    }

    @FXML
    private void handlePopupButtonAction(ActionEvent event) {

        Alert alert = new Alert(Alert.AlertType.INFORMATION);
        alert.setTitle("Informação");
        alert.setHeaderText(null);
        alert.setContentText("Clique em 'PESQUISAR IMAGEM' para procurar uma imagem!");

        alert.setGraphic(null);

        alert.showAndWait();
    }
}

import cv2
import numpy as np

# Load ground truth annotation (manually created)
ground_truth = cv2.imread("D:\Final_Year_Project\ground_truth.png", cv2.IMREAD_GRAYSCALE)

# Function to calculate accuracy metrics
def calculate_accuracy(segmentation_map, ground_truth):
    # Define thresholds for foreground and background
    threshold_foreground = 128
    threshold_background = 128

    # Create binary masks based on thresholds
    predicted_foreground = np.where(segmentation_map > threshold_foreground, 255, 0)
    true_foreground = np.where(ground_truth > threshold_background, 255, 0)

    # Calculate true positives, false positives, true negatives, and false negatives
    TP = np.sum(np.logical_and(predicted_foreground == 255, true_foreground == 255))
    FP = np.sum(np.logical_and(predicted_foreground == 255, true_foreground == 0))
    TN = np.sum(np.logical_and(predicted_foreground == 0, true_foreground == 0))
    FN = np.sum(np.logical_and(predicted_foreground == 0, true_foreground == 255))

    # Calculate accuracy metrics
    precision = TP / (TP + FP)
    recall = TP / (TP + FN)
    accuracy = (TP + TN) / (TP + TN + FP + FN)

    return precision, recall, accuracy

# Function to initialize ViBe model
def initialize_vibe_model(frame, num_samples=20, radius=20):
    vibe_samples = np.zeros((frame.shape[0], frame.shape[1], num_samples, 3), dtype=np.uint8)
    for i in range(num_samples):
        x, y = np.random.randint(0, frame.shape[1]), np.random.randint(0, frame.shape[0])
        vibe_samples[y, x, i] = frame[y, x]
    return vibe_samples

# Function to update ViBe model
def update_vibe_model(frame, vibe_samples, num_samples=20, radius=20, threshold=2):
    height, width = frame.shape[:2]
    segmentation_map = np.zeros((height, width), dtype=np.uint8)
    
    for y in range(height):
        for x in range(width):
            matches = 0
            for i in range(num_samples):
                if np.linalg.norm(frame[y, x] - vibe_samples[y, x, i]) < threshold:
                    matches += 1
                    if matches >= radius:
                        break
            if matches >= radius:
                segmentation_map[y, x] = 0  # Background
            else:
                segmentation_map[y, x] = 255  # Foreground
    
    # Update model with new pixel values
    for y in range(height):
        for x in range(width):
            if np.random.randint(0, num_samples) == 0:
                vibe_samples[y, x, np.random.randint(0, num_samples)] = frame[y, x]
    
    return segmentation_map

# Main function for firearm detection
def firearm_detection(video_path):
    num_samples = 20  # Number of samples to keep for each pixel
    radius = 20       # Radius for matching
    threshold = 2    # Matching threshold
    
    cap = cv2.VideoCapture(video_path)
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        segmentation_map = update_vibe_model(frame, vibe_samples, num_samples, radius, threshold)
        
        # Calculate accuracy metrics
        precision, recall, accuracy = calculate_accuracy(segmentation_map, ground_truth)
        
        # Print accuracy metrics
        print(f"Precision: {precision}, Recall: {recall}, Accuracy: {accuracy}")
        
        # Visualize the segmentation map
        cv2.imshow("Segmentation Map", segmentation_map)
        
        if cv2.waitKey(30) & 0xFF == 27:  # Press 'Esc' to exit
            break
    
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    video_path = "D:\Final_Year_Project\Guns"  # Replace with your video path
    vibe_samples = initialize_vibe_model(cv2.imread(video_path), num_samples=20, radius=20)
    firearm_detection(video_path)


---
sidebar_position: 5
---

# Sandbox IDE

The Sandbox IDE is a cloud development environment within TGDeX that enables users—especially data scientists, researchers, and developers—to build, test, and deploy AI models using TGDeX data banks and AI resources. It offers secure, compute-enabled notebooks along with access to curated toolsets and learning materials.

---

## Creating Notebooks

To start working in the IDE:
1. Click on **Create New Notebook** from the Sandbox IDE home page.
2. A pop-up window will prompt the user to:
   - Enter a notebook name
   - Choose an instance type (e.g., CPU or GPU, if available)
3. Click **Submit** to launch the notebook. Once submitted, the user is taken to an IDE interface where they can write and run code.

<!-- ![Create New Notebook](./img/sandbox_create_notebook.png) -->

---

## Requesting Compute Resources

If users require GPU support for model training, they must submit a compute request. This involves filling out a short application with the following key details:
- **Type of Model** (e.g., CNN, Transformer, LLM)
- **Pre-trained or New Model** (to assess GPU time needs)
- **Data Type** (e.g., image, tabular, text)
- **Dataset Size and Training Volume** (helps estimate required GPU hours)
- **Estimated Iterations or Training Time**

Other evaluation factors include:
- Alignment with Telangana's priority sectors
- Scale of impact
- Innovation
- Readiness stage (PoC/MVP)
- Past usage on TGDeX

---

## Using Compute in IDE

Once compute access is approved:
- Users can launch or switch their notebooks to run on the allocated compute resources.
- The notebook automatically connects to the compute backend, allowing users to perform resource-intensive tasks such as model training, evaluation, inference, or fine-tuning directly within the environment.
- Approved users are allotted a compute quota (such as GPU hours or sessions), which can be tracked through their dashboard.
- Each quota comes with an expiration timeline and may be subject to limits based on prior usage and overall platform capacity.
- Users are expected to use their allocated compute efficiently and are encouraged to request only what they truly need to ensure fair access for all members of the TGDeX community.

> **Note:** Each notebook has information on the resource availability. Obtaining resource availability through the container shell interface will yield misleading information.

- Compute usage will be tracked and subtracted from the available quota.
- Once the available quota for the user is breached, a warning will flash, all current work will be saved, and the notebook will be suspended.

<!-- ![Compute Quota Warning](./img/sandbox_compute_quota.png) -->

---

## Leveraging Built-in Toolsets

The Sandbox IDE on TGDeX comes pre-loaded with a wide range of open-source toolsets to support the full AI/ML workflow, including:
- Data analysis and feature engineering
- Model training, deployment, and monitoring

Popular libraries available:
- MLflow
- DVC
- TensorBoard
- Streamlit
- Plotly
- BentoML

These enable users to build, track, visualize, and serve models efficiently without additional setup.

---

## Learning Using Library

Users can explore the **Learning Library**, which includes:
- Articles and tutorials on ML techniques, evaluation metrics, and model validation
- Step-by-step notebooks and guides for specific tasks like NLP and computer vision
- Video walkthroughs demonstrating real-world AI applications

<!-- ![Learning Library](./img/sandbox_learning_library.png) -->

---

The Sandbox IDE combines ready-to-use compute, libraries, and learning materials to streamline the end-to-end AI development experience on TGDeX.

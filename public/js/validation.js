// public/js/validation.js
document.addEventListener("DOMContentLoaded", function() {
    // Validation du formulaire utilisateur
    const userForms = document.querySelectorAll(".user-form");
    
    userForms.forEach(form => {
      form.addEventListener("submit", function(event) {
        let isValid = true;
        
        // Validation du prénom et nom
        const firstNameInput = form.querySelector("#inputFirstName");
        const lastNameInput = form.querySelector("#inputLastName");
        
        if (firstNameInput && firstNameInput.value.trim().length < 2) {
          showError(firstNameInput, "Le prénom doit contenir au moins 2 caractères");
          isValid = false;
        } else {
          clearError(firstNameInput);
        }
        
        if (lastNameInput && lastNameInput.value.trim().length < 2) {
          showError(lastNameInput, "Le nom doit contenir au moins 2 caractères");
          isValid = false;
        } else {
          clearError(lastNameInput);
        }
        
        // Validation de l'email
        const emailInput = form.querySelector("#inputEmail");
        if (emailInput) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, "Veuillez entrer une adresse email valide");
            isValid = false;
          } else {
            clearError(emailInput);
          }
        }
        
        // Validation du mot de passe
        const passwordInput = form.querySelector("#inputPassword");
        if (passwordInput && passwordInput.value.length < 8) {
          showError(passwordInput, "Le mot de passe doit contenir au moins 8 caractères");
          isValid = false;
        } else {
          clearError(passwordInput);
        }
        
        // Validation du code postal
        const zipCodeInput = form.querySelector("#inputZipCode");
        if (zipCodeInput) {
          const zipRegex = /^\d{5}$/;
          if (!zipRegex.test(zipCodeInput.value)) {
            showError(zipCodeInput, "Le code postal doit contenir exactement 5 chiffres");
            isValid = false;
          } else {
            clearError(zipCodeInput);
          }
        }
        
        if (!isValid) {
          event.preventDefault();
        }
      });
    });
    
    // Validation du formulaire de cours
    const courseForms = document.querySelectorAll(".course-form");
    
    courseForms.forEach(form => {
      form.addEventListener("submit", function(event) {
        let isValid = true;
        
        // Validation du titre
        const titleInput = form.querySelector("#inputTitle");
        if (titleInput && titleInput.value.trim().length < 3) {
          showError(titleInput, "Le titre doit contenir au moins 3 caractères");
          isValid = false;
        } else {
          clearError(titleInput);
        }
        
        // Validation de la description
        const descInput = form.querySelector("#inputDescription");
        if (descInput && descInput.value.trim().length < 10) {
          showError(descInput, "La description doit contenir au moins 10 caractères");
          isValid = false;
        } else {
          clearError(descInput);
        }
        
        // Validation du coût
        const costInput = form.querySelector("#inputCost");
        if (costInput && (isNaN(costInput.value) || Number(costInput.value) < 0)) {
          showError(costInput, "Le coût doit être un nombre positif");
          isValid = false;
        } else {
          clearError(costInput);
        }
        
        if (!isValid) {
          event.preventDefault();
        }
      });
    });
    
    // Fonctions utilitaires pour afficher/effacer les erreurs
    function showError(input, message) {
      const formGroup = input.closest(".form-group");
      input.classList.add("is-invalid");
      
      // Vérifier si un message d'erreur existe déjà
      let errorDiv = formGroup.querySelector(".invalid-feedback");
      if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.className = "invalid-feedback";
        formGroup.appendChild(errorDiv);
      }
      
      errorDiv.textContent = message;
    }
    
    function clearError(input) {
      input.classList.remove("is-invalid");
      const formGroup = input.closest(".form-group");
      const errorDiv = formGroup.querySelector(".invalid-feedback");
      if (errorDiv) {
        errorDiv.remove();
      }
    }
  });
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    en: {
      navHome: "Home",
      navPrograms: "Programs",
      navRoadmap: "Roadmap",
      navPortal: "Student Portal",

      eyebrow: "PRO-MAX ACADÉMIE • INSURANCE SCHOOL",
      titleA: "Build the knowledge.",
      titleB: "Earn the confidence.",

      intro:
        "A focused, multilingual learning path for future insurance professionals. Study the fundamentals, track your progress, prepare for the final exam, and move forward with purpose.",

      explore: "Explore Programs",
      portal: "Student Portal",

      programTitle: "Core study programs",
      programSub:
        "Choose a learning track and build strong insurance foundations.",

      courses: [
        [
          "Life Insurance",
          "Coverage, beneficiaries, policies and client needs."
        ],
        [
          "Health Insurance",
          "Plans, essential terminology and responsible guidance."
        ],
        [
          "Auto Insurance",
          "Liability, protection, claims and policy structure."
        ],
        [
          "Property & Casualty",
          "Property risks, casualty protection and coverage basics."
        ]
      ],

      journey: "Your path to completion",

      steps: [
        [
          "Enroll",
          "Create your student profile and select a program."
        ],
        [
          "Learn",
          "Complete lessons, quizzes and practical reviews."
        ],
        [
          "Final Exam",
          "Take the final exam through BSS1815 PRO-MAX DMP."
        ],
        [
          "Certificate",
          "Verify your result and receive your certificate."
        ]
      ],

      payment: "Clear payment progress",

      paid:
        "Track paid amount, remaining balance and status from 0/5 to 5/5.",

      tuition: "Total tuition",
      plan: "5 payments × 1,000 HTG",

      promise:
        "Learn with direction. Progress with discipline.",

      promiseSub:
        "Education, technology and opportunity inside one professional digital ecosystem.",

      footer: "LEARN. EVOLVE. SUCCEED.",
      paymentStatus: "Payments completed",
      paidLabel: "Paid",
      balanceLabel: "Balance"
    },

    fr: {
      navHome: "Accueil",
      navPrograms: "Programmes",
      navRoadmap: "Parcours",
      navPortal: "Portail étudiant",

      eyebrow: "PRO-MAX ACADÉMIE • ÉCOLE D’ASSURANCE",
      titleA: "Développez vos connaissances.",
      titleB: "Gagnez en confiance.",

      intro:
        "Un parcours d’apprentissage ciblé et multilingue pour les futurs professionnels de l’assurance. Maîtrisez les bases, suivez vos progrès et préparez l’examen final.",

      explore: "Voir les programmes",
      portal: "Portail étudiant",

      programTitle: "Programmes fondamentaux",

      programSub:
        "Choisissez votre parcours et construisez des bases solides en assurance.",

      courses: [
        [
          "Assurance vie",
          "Couverture, bénéficiaires, polices et besoins des clients."
        ],
        [
          "Assurance santé",
          "Régimes, terminologie essentielle et conseils responsables."
        ],
        [
          "Assurance automobile",
          "Responsabilité, protection, sinistres et structure des polices."
        ],
        [
          "Biens et risques divers",
          "Risques liés aux biens, protection et notions de couverture."
        ]
      ],

      journey: "Votre parcours vers la réussite",

      steps: [
        [
          "Inscription",
          "Créez votre profil et choisissez un programme."
        ],
        [
          "Formation",
          "Terminez les leçons, quiz et révisions pratiques."
        ],
        [
          "Examen final",
          "Passez l’examen via BSS1815 PRO-MAX DMP."
        ],
        [
          "Certificat",
          "Vérifiez votre résultat et recevez votre certificat."
        ]
      ],

      payment: "Progression des paiements",

      paid:
        "Suivez le montant payé, le solde et le statut de 0/5 à 5/5.",

      tuition: "Frais de scolarité",
      plan: "5 versements × 1 000 HTG",

      promise:
        "Apprenez avec méthode. Progressez avec discipline.",

      promiseSub:
        "Éducation, technologie et opportunités dans un écosystème numérique professionnel.",

      footer: "APPRENDRE. ÉVOLUER. RÉUSSIR.",
      paymentStatus: "Versements effectués",
      paidLabel: "Payé",
      balanceLabel: "Solde"
    },

    ht: {
      navHome: "Akèy",
      navPrograms: "Pwogram",
      navRoadmap: "Chemen",
      navPortal: "Pòtal elèv",

      eyebrow: "PRO-MAX ACADÉMIE • LEKÒL ASIRANS",
      titleA: "Devlope konesans ou.",
      titleB: "Bati konfyans ou.",

      intro:
        "Yon chemen aprantisaj byen òganize nan twa lang pou pwofesyonèl asirans demen yo. Aprann baz yo, suiv pwogrè ou epi prepare egzamen final la.",

      explore: "Gade pwogram yo",
      portal: "Pòtal elèv",

      programTitle: "Pwogram prensipal yo",

      programSub:
        "Chwazi chemen ou epi bati yon bon fondasyon nan asirans.",

      courses: [
        [
          "Asirans lavi",
          "Kouvèti, benefisyè, polis ak bezwen kliyan yo."
        ],
        [
          "Asirans sante",
          "Plan, mo enpòtan ak konsèy responsab."
        ],
        [
          "Asirans machin",
          "Responsablite, pwoteksyon, reklamasyon ak estrikti polis."
        ],
        [
          "Property & Casualty",
          "Risk sou pwopriyete, pwoteksyon ak prensip kouvèti yo."
        ]
      ],

      journey: "Chemen ou pou fini",

      steps: [
        [
          "Enskripsyon",
          "Kreye pwofil elèv ou epi chwazi yon pwogram."
        ],
        [
          "Aprann",
          "Fini leson, quiz ak revizyon pratik yo."
        ],
        [
          "Egzamen final",
          "Pran egzamen an atravè BSS1815 PRO-MAX DMP."
        ],
        [
          "Sètifika",
          "Verifye rezilta ou epi resevwa sètifika ou."
        ]
      ],

      payment: "Pwogrè peman ki klè",

      paid:
        "Suiv kantite ou peye, balans ou ak estati 0/5 rive 5/5.",

      tuition: "Pri total fòmasyon an",
      plan: "5 peman × 1,000 HTG",

      promise:
        "Aprann ak direksyon. Avanse ak disiplin.",

      promiseSub:
        "Edikasyon, teknoloji ak opòtinite nan yon sèl ekosistèm dijital pwofesyonèl.",

      footer: "APRANN. EVOLYE. REYISI.",
      paymentStatus: "Peman ki fèt",
      paidLabel: "Peye",
      balanceLabel: "Balans"
    }
  };

  const storage = {
    get: function (key) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        return null;
      }
    },

    set: function (key, value) {
      try {
        window.localStorage.setItem(key, String(value));
      } catch (error) {
        console.warn("Local storage is unavailable.");
      }
    }
  };

  const icons = ["♥", "+", "◆", "⌂"];

  let currentLanguage =
    storage.get("promaxInsuranceLang") || "en";

  if (!translations[currentLanguage]) {
    currentLanguage = "en";
  }

  let paymentsCompleted = Number(
    storage.get("promaxPaymentHistory")
  );

  if (!Number.isFinite(paymentsCompleted)) {
    paymentsCompleted = 0;
  }

  paymentsCompleted = Math.max(
    0,
    Math.min(5, paymentsCompleted)
  );

  function getElement(id) {
    return document.getElementById(id);
  }

  function renderCourses(languageContent) {
    const courseGrid = getElement("courseGrid");

    if (!courseGrid) {
      return;
    }

    courseGrid.innerHTML = languageContent.courses
      .map(function (course, index) {
        return `
          <article class="card">
            <span class="number">0${index + 1}</span>
            <b class="icon">${icons[index]}</b>
            <h3>${course[0]}</h3>
            <p>${course[1]}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderSteps(languageContent) {
    const stepsContainer = getElement("steps");

    if (!stepsContainer) {
      return;
    }

    stepsContainer.innerHTML = languageContent.steps
      .map(function (step, index) {
        return `
          <article class="step">
            <b>0${index + 1}</b>
            <h3>${step[0]}</h3>
            <p>${step[1]}</p>
          </article>
        `;
      })
      .join("");
  }

  function renderPayments() {
    const languageContent =
      translations[currentLanguage];

    const progressBar = getElement("progressBar");
    const payDots = getElement("payDots");
    const payStatus = getElement("payStatus");

    const paidAmount = paymentsCompleted * 1000;
    const remainingBalance = 5000 - paidAmount;

    if (progressBar) {
      progressBar.style.width =
        paymentsCompleted * 20 + "%";
    }

    if (payDots) {
      payDots.innerHTML = [1, 2, 3, 4, 5]
        .map(function (number) {
          const completed =
            number <= paymentsCompleted;

          const background = completed
            ? "#e46b21"
            : "transparent";

          const color = completed
            ? "#0b0402"
            : "#e27940";

          return `
            <b style="
              background:${background};
              color:${color};
            ">
              ${number}
            </b>
          `;
        })
        .join("");
    }

    if (payStatus) {
      payStatus.textContent =
        languageContent.paymentStatus +
        ": " +
        paymentsCompleted +
        "/5 • " +
        languageContent.paidLabel +
        ": " +
        paidAmount.toLocaleString() +
        " HTG • " +
        languageContent.balanceLabel +
        ": " +
        remainingBalance.toLocaleString() +
        " HTG";
    }

    storage.set(
      "promaxPaymentHistory",
      paymentsCompleted
    );
  }

  function renderLanguage() {
    const languageContent =
      translations[currentLanguage];

    document.documentElement.lang =
      currentLanguage;

    document
      .querySelectorAll("[data-t]")
      .forEach(function (element) {
        const translationKey =
          element.getAttribute("data-t");

        const translatedText =
          languageContent[translationKey];

        if (typeof translatedText === "string") {
          element.textContent = translatedText;
        }
      });

    document
      .querySelectorAll("[data-lang]")
      .forEach(function (button) {
        const buttonLanguage =
          button.getAttribute("data-lang");

        button.classList.toggle(
          "active",
          buttonLanguage === currentLanguage
        );
      });

    renderCourses(languageContent);
    renderSteps(languageContent);
    renderPayments();
  }

  document
    .querySelectorAll("[data-lang]")
    .forEach(function (button) {
      button.addEventListener(
        "click",
        function () {
          const selectedLanguage =
            button.getAttribute("data-lang");

          if (!translations[selectedLanguage]) {
            return;
          }

          currentLanguage =
            selectedLanguage;

          storage.set(
            "promaxInsuranceLang",
            currentLanguage
          );

          renderLanguage();
        }
      );
    });

  const plusButton = getElement("plus");
  const minusButton = getElement("minus");
  const resetButton = getElement("reset");

  if (plusButton) {
    plusButton.addEventListener(
      "click",
      function () {
        if (paymentsCompleted < 5) {
          paymentsCompleted += 1;
          renderPayments();
        }
      }
    );
  }

  if (minusButton) {
    minusButton.addEventListener(
      "click",
      function () {
        if (paymentsCompleted > 0) {
          paymentsCompleted -= 1;
          renderPayments();
        }
      }
    );
  }

  if (resetButton) {
    resetButton.addEventListener(
      "click",
      function () {
        paymentsCompleted = 0;
        renderPayments();
      }
    );
  }

  renderLanguage();
});

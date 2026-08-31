"use strict";

document.addEventListener("DOMContentLoaded", function () {
  /*
   * PRO-MAX ACADÉMIE INSURANCE SCHOOL
   * COMPLETE HOMEPAGE JAVASCRIPT
   *
   * Official tuition:
   * $5,000 USD
   * 5 payments × $1,000 USD
   */

  const TUITION = {
    total: 5000,
    paymentAmount: 1000,
    numberOfPayments: 5,
    currency: "USD"
  };

  const translations = {
    en: {
      navHome: "Home",
      navPrograms: "Programs",
      navRoadmap: "Roadmap",
      navProfessor: "Ask Professor",
      navPortal: "Student Portal",

      eyebrow:
        "PRO-MAX ACADÉMIE • INSURANCE SCHOOL",

      titleA:
        "Build the knowledge.",

      titleB:
        "Earn the confidence.",

      intro:
        "A focused, multilingual learning path for future insurance professionals. Study the fundamentals, track your progress, prepare for the final exam, and move forward with purpose.",

      explore:
        "Explore Programs",

      portal:
        "Student Portal",

      programTitle:
        "Core study programs",

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

      journey:
        "Your path to completion",

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

      professorOnline:
        "COMING SOON",

      askTitle:
        "Ask the Professor",

      askIntro:
        "Choose a common insurance question and receive a clear educational answer.",

      questionLabel:
        "Your question",

      askButton:
        "Ask Professor",

      answerTitle:
        "Professor's answer",

      answerPlaceholder:
        "Select a question, then press Ask Professor.",

      educationNote:
        "Educational information only. Requirements and laws can vary by state.",

      questions: [
        {
          question:
            "What is life insurance?",
          answer:
            "Life insurance is a contract that can provide a death benefit to designated beneficiaries when the insured person dies, subject to the terms of the policy."
        },
        {
          question:
            "What is a beneficiary?",
          answer:
            "A beneficiary is the person or organization designated to receive policy benefits after a covered event."
        },
        {
          question:
            "What is an insurance premium?",
          answer:
            "A premium is the amount paid to keep an insurance policy active. It may be paid monthly, quarterly, semiannually or annually."
        },
        {
          question:
            "What is a deductible?",
          answer:
            "A deductible is the amount the insured must pay before the insurance company begins paying covered expenses, according to the policy."
        },
        {
          question:
            "What is property and casualty insurance?",
          answer:
            "Property insurance generally protects physical property, while casualty insurance generally addresses liability for injury or damage involving other people."
        }
      ],

      payment:
        "Clear payment progress",

      paid:
        "Track paid amount, remaining balance and status from 0/5 to 5/5.",

      tuition:
        "Total tuition",

      plan:
        "5 payments × $1,000 USD",

      promise:
        "Learn with direction. Progress with discipline.",

      promiseSub:
        "Education, technology and opportunity inside one professional digital ecosystem.",

      footer:
        "LEARN. EVOLVE. SUCCEED.",

      status:
        "Payments completed",

      paidLabel:
        "Paid",

      balance:
        "Balance",

      minusPayment:
        "− Payment",

      plusPayment:
        "+ Payment",

      reset:
        "Reset"
    },

    fr: {
      navHome:
        "Accueil",

      navPrograms:
        "Programmes",

      navRoadmap:
        "Parcours",

      navProfessor:
        "Demander au professeur",

      navPortal:
        "Portail étudiant",

      eyebrow:
        "PRO-MAX ACADÉMIE • ÉCOLE D’ASSURANCE",

      titleA:
        "Développez vos connaissances.",

      titleB:
        "Gagnez en confiance.",

      intro:
        "Un parcours d’apprentissage ciblé et multilingue pour les futurs professionnels de l’assurance. Maîtrisez les bases, suivez vos progrès et préparez l’examen final.",

      explore:
        "Voir les programmes",

      portal:
        "Portail étudiant",

      programTitle:
        "Programmes fondamentaux",

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

      journey:
        "Votre parcours vers la réussite",

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

      professorOnline:
        "BIENTÔT DISPONIBLE",

      askTitle:
        "Demander au professeur",

      askIntro:
        "Choisissez une question courante et recevez une réponse éducative claire.",

      questionLabel:
        "Votre question",

      askButton:
        "Demander au professeur",

      answerTitle:
        "Réponse du professeur",

      answerPlaceholder:
        "Choisissez une question, puis appuyez sur le bouton.",

      educationNote:
        "Informations éducatives uniquement. Les exigences et les lois peuvent varier selon l’État.",

      questions: [
        {
          question:
            "Qu’est-ce que l’assurance vie ?",
          answer:
            "L’assurance vie est un contrat pouvant verser une prestation de décès aux bénéficiaires désignés lorsque l’assuré décède, selon les conditions de la police."
        },
        {
          question:
            "Qu’est-ce qu’un bénéficiaire ?",
          answer:
            "Un bénéficiaire est la personne ou l’organisation désignée pour recevoir les prestations de la police après un événement couvert."
        },
        {
          question:
            "Qu’est-ce qu’une prime d’assurance ?",
          answer:
            "La prime est le montant payé pour maintenir une police d’assurance en vigueur."
        },
        {
          question:
            "Qu’est-ce qu’une franchise ?",
          answer:
            "La franchise est le montant que l’assuré doit payer avant que l’assureur commence à payer les dépenses couvertes."
        },
        {
          question:
            "Qu’est-ce que l’assurance de biens et responsabilité ?",
          answer:
            "L’assurance de biens protège généralement les biens physiques, tandis que l’assurance responsabilité couvre certains dommages causés à d’autres personnes."
        }
      ],

      payment:
        "Progression des paiements",

      paid:
        "Suivez le montant payé, le solde et le statut de 0/5 à 5/5.",

      tuition:
        "Frais de scolarité",

      plan:
        "5 paiements × 1 000 $ USD",

      promise:
        "Apprenez avec méthode. Progressez avec discipline.",

      promiseSub:
        "Éducation, technologie et opportunités dans un écosystème numérique professionnel.",

      footer:
        "APPRENDRE. ÉVOLUER. RÉUSSIR.",

      status:
        "Paiements effectués",

      paidLabel:
        "Payé",

      balance:
        "Solde",

      minusPayment:
        "− Paiement",

      plusPayment:
        "+ Paiement",

      reset:
        "Réinitialiser"
    },

    ht: {
      navHome:
        "Akèy",

      navPrograms:
        "Pwogram",

      navRoadmap:
        "Chemen",

      navProfessor:
        "Mande Pwofesè",

      navPortal:
        "Pòtal Elèv",

      eyebrow:
        "PRO-MAX ACADÉMIE • LEKÒL ASIRANS",

      titleA:
        "Devlope konesans ou.",

      titleB:
        "Bati konfyans ou.",

      intro:
        "Yon chemen aprantisaj byen òganize nan twa lang pou pwofesyonèl asirans demen yo. Aprann baz yo, suiv pwogrè ou epi prepare egzamen final la.",

      explore:
        "Gade pwogram yo",

      portal:
        "Pòtal Elèv",

      programTitle:
        "Pwogram prensipal yo",

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

      journey:
        "Chemen ou pou fini",

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

      professorOnline:
        "AP VINI",

      askTitle:
        "Mande Pwofesè",

      askIntro:
        "Chwazi yon kestyon asirans epi resevwa yon repons edikatif ki klè.",

      questionLabel:
        "K kestyon ou",

      askButton:
        "Mande Pwofesè",

      answerTitle:
        "Repons pwofesè a",

      answerPlaceholder:
        "Chwazi yon kestyon epi peze bouton Mande Pwofesè a.",

      educationNote:
        "Se enfòmasyon edikatif sèlman. Kondisyon ak lwa yo ka diferan selon eta a.",

      questions: [
        {
          question:
            "Kisa asirans lavi ye?",
          answer:
            "Asirans lavi se yon kontra ki kapab peye yon benefis bay benefisyè yo lè moun ki asire a mouri, selon kondisyon polis la."
        },
        {
          question:
            "Kisa yon benefisyè ye?",
          answer:
            "Yon benefisyè se moun oswa òganizasyon yo chwazi pou resevwa benefis yon polis apre yon evènman ki kouvri."
        },
        {
          question:
            "Kisa yon prim asirans ye?",
          answer:
            "Prim asirans lan se kantite lajan moun nan peye pou kenbe polis asirans li aktif."
        },
        {
          question:
            "Kisa yon deductible ye?",
          answer:
            "Deductible la se kantite lajan moun ki asire a dwe peye anvan konpayi asirans lan kòmanse peye depans ki kouvri yo."
        },
        {
          question:
            "Kisa Property and Casualty Insurance ye?",
          answer:
            "Asirans pwopriyete pwoteje byen fizik, pandan asirans casualty ka pwoteje kont responsablite pou domaj oswa blesi."
        }
      ],

      payment:
        "Pwogrè peman",

      paid:
        "Suiv kantite ou peye, balans ou ak estati 0/5 rive 5/5.",

      tuition:
        "Pri total fòmasyon an",

      plan:
        "5 peman × $1,000 USD",

      promise:
        "Aprann ak direksyon. Avanse ak disiplin.",

      promiseSub:
        "Edikasyon, teknoloji ak opòtinite nan yon sèl ekosistèm dijital pwofesyonèl.",

      footer:
        "APRANN. EVOLYE. REYISI.",

      status:
        "Peman ki fèt",

      paidLabel:
        "Peye",

      balance:
        "Balans",

      minusPayment:
        "− Peman",

      plusPayment:
        "+ Peman",

      reset:
        "Rekòmanse"
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
        window.localStorage.setItem(
          key,
          String(value)
        );
      } catch (error) {
        return;
      }
    }
  };

  let currentLanguage =
    storage.get("promaxInsuranceLang") || "en";

  if (!translations[currentLanguage]) {
    currentLanguage = "en";
  }

  let completedPayments = Number(
    storage.get("promaxPaymentHistory")
  ) || 0;

  completedPayments = Math.max(
    0,
    Math.min(
      TUITION.numberOfPayments,
      completedPayments
    )
  );

  const courseIcons = [
    "♥",
    "+",
    "◆",
    "⌂"
  ];

  const courseGrid =
    document.getElementById("courseGrid");

  const stepsContainer =
    document.getElementById("steps");

  const progressBar =
    document.getElementById("progressBar");

  const payDots =
    document.getElementById("payDots");

  const paymentStatus =
    document.getElementById("payStatus");

  const plusButton =
    document.getElementById("plus");

  const minusButton =
    document.getElementById("minus");

  const resetButton =
    document.getElementById("reset");

  const professorQuestion =
    document.getElementById("professorQuestion");

  const questionChips =
    document.getElementById("questionChips");

  const askProfessorButton =
    document.getElementById("askProfessor");

  const professorAnswer =
    document.getElementById("professorAnswer");

  function formatUSD(amount) {
    return `$${amount.toLocaleString("en-US")} USD`;
  }

  function renderCourses() {
    if (!courseGrid) {
      return;
    }

    const currentText =
      translations[currentLanguage];

    courseGrid.innerHTML =
      currentText.courses
        .map(function (course, index) {
          return `
            <article class="card">
              <span class="number">
                0${index + 1}
              </span>

              <b class="icon">
                ${courseIcons[index]}
              </b>

              <h3>${course[0]}</h3>
              <p>${course[1]}</p>
            </article>
          `;
        })
        .join("");
  }

  function renderSteps() {
    if (!stepsContainer) {
      return;
    }

    const currentText =
      translations[currentLanguage];

    stepsContainer.innerHTML =
      currentText.steps
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

  function renderProfessorQuestions() {
    if (
      !professorQuestion ||
      !questionChips
    ) {
      return;
    }

    const currentText =
      translations[currentLanguage];

    professorQuestion.innerHTML =
      currentText.questions
        .map(function (item, index) {
          return `
            <option value="${index}">
              ${item.question}
            </option>
          `;
        })
        .join("");

    questionChips.innerHTML =
      currentText.questions
        .slice(0, 3)
        .map(function (item, index) {
          return `
            <button
              type="button"
              data-question-index="${index}"
            >
              ${item.question}
            </button>
          `;
        })
        .join("");

    questionChips
      .querySelectorAll("[data-question-index]")
      .forEach(function (button) {
        button.addEventListener("click", function () {
          professorQuestion.value =
            button.dataset.questionIndex;
        });
      });
  }

  function renderProfessorAnswer() {
    if (
      !professorQuestion ||
      !professorAnswer
    ) {
      return;
    }

    const currentText =
      translations[currentLanguage];

    const questionIndex =
      Number(professorQuestion.value) || 0;

    const selectedQuestion =
      currentText.questions[questionIndex];

    professorAnswer.innerHTML = `
      <strong>
        ${currentText.answerTitle}
      </strong>

      <p>
        ${selectedQuestion.answer}
      </p>
    `;
  }

  function renderPayments() {
    const currentText =
      translations[currentLanguage];

    const paidAmount =
      completedPayments * TUITION.paymentAmount;

    const remainingBalance =
      TUITION.total - paidAmount;

    const progressPercentage =
      (
        completedPayments /
        TUITION.numberOfPayments
      ) * 100;

    if (progressBar) {
      progressBar.style.width =
        `${progressPercentage}%`;
    }

    if (payDots) {
      payDots.innerHTML =
        Array.from(
          {
            length: TUITION.numberOfPayments
          },
          function (_, index) {
            const paymentNumber = index + 1;

            const completed =
              paymentNumber <= completedPayments;

            return `
              <b
                class="${completed ? "paid" : ""}"
                style="
                  background: ${
                    completed
                      ? "#e46b21"
                      : "transparent"
                  };
                  color: ${
                    completed
                      ? "#0b0402"
                      : "#e27940"
                  };
                "
              >
                ${paymentNumber}
              </b>
            `;
          }
        ).join("");
    }

    if (paymentStatus) {
      paymentStatus.textContent =
        `${currentText.status}: ` +
        `${completedPayments}/${TUITION.numberOfPayments}` +
        ` · ${currentText.paidLabel}: ` +
        `${formatUSD(paidAmount)}` +
        ` · ${currentText.balance}: ` +
        `${formatUSD(remainingBalance)}`;
    }

    storage.set(
      "promaxPaymentHistory",
      completedPayments
    );
  }

  function renderPage() {
    const currentText =
      translations[currentLanguage];

    document.documentElement.lang =
      currentLanguage === "ht"
        ? "ht"
        : currentLanguage;

    document
      .querySelectorAll("[data-t]")
      .forEach(function (element) {
        const translationKey =
          element.dataset.t;

        const translatedValue =
          currentText[translationKey];

        if (typeof translatedValue === "string") {
          element.textContent = translatedValue;
        }
      });

    document
      .querySelectorAll("[data-lang]")
      .forEach(function (button) {
        button.classList.toggle(
          "active",
          button.dataset.lang === currentLanguage
        );
      });

    renderCourses();
    renderSteps();
    renderProfessorQuestions();
    renderPayments();
  }

  document
    .querySelectorAll("[data-lang]")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        currentLanguage =
          button.dataset.lang;

        storage.set(
          "promaxInsuranceLang",
          currentLanguage
        );

        renderPage();
      });
    });

  if (plusButton) {
    plusButton.addEventListener("click", function () {
      if (
        completedPayments <
        TUITION.numberOfPayments
      ) {
        completedPayments += 1;
        renderPayments();
      }
    });
  }

  if (minusButton) {
    minusButton.addEventListener("click", function () {
      if (completedPayments > 0) {
        completedPayments -= 1;
        renderPayments();
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      completedPayments = 0;
      renderPayments();
    });
  }

  if (askProfessorButton) {
    askProfessorButton.addEventListener(
      "click",
      renderProfessorAnswer
    );
  }

  renderPage();
});

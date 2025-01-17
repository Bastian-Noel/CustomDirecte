/**
 * @fileOverview Gestion des paramètres de l'extension.
 * @author Bastian NOEL
 * @version 2.0
 */

/* █ █ █▀█ █▀▄ ▄▀█ ▀█▀ █▀▀ */
/* █▄█ █▀▀ █▄▀ █▀█  █  ██▄ */

/**
 * Fonctions de mise à jour des paramètres.
 * @namespace Updates
 * @example
 * // Retourne les paramètres ('settings') mis à jour de la version 0 à la version 1
 * Updates[1][0](settings);
 */
var Updates = {
  1: {
    // Met à jour les paramètres de la version 0 à la version 1
    0: function (settings) {
      console.log(`Update settings from version 0 to version 1 ${Date.now()}`);
      return settings;
    },
  },
  2: {
    // Met à jour les paramètres de la version 1 à la version 2
    1: function (settings) {
      console.log(`Update settings from version 1 to version 2 ${Date.now()}`);
      return settings;
    },
    // Met à jour les paramètres de la version 0 à la version 2
    0: function (settings) {
      console.log(`Update settings from version 0 to version 2 ${Date.now()}`);
      return settings;
    },
  },
};

/* █▀ █▀▀ ▀█▀ ▀█▀ █ █▄ █ █▀▀ █▀ */
/* ▄█ ██▄  █   █  █ █ ▀█ █▄█ ▄█ */

/**
 * Objet contenant les paramètres de l'extension.
 * @namespace Settings
 * @property {number} version La version des paramètres.
 * @property {Object} stored Les paramètres de l'extension.
 * @property {function} updateSettings Met à jour les paramètres de l'extension.
 * @property {function} storageGet Récupère les paramètres de l'extension.
 * @property {function} storageSet Enregistre les paramètres de l'extension.
 */
var Settings = {
  version: 2,
  stored: {},

  /**
   * Vérifie si une mise à jour est nécessaire et l'applique.
   * @param {Object} result L'objet contenant les paramètres de l'extension.
   */
  updateSettings(result) {
    if (this.version == result.version) return;
    // Applique les mises à jour nécessaires
    current = this.version;
    while (result.version < this.version) {
      if (Updates[current]?.[result.version] != undefined) {
        result.settings = Updates[current][result.version](result.settings);
        result.version = current;
        current = this.version;
      } else current--;
    }
    this.stored = result.settings;
  },

  /**
   * Récupère les paramètres de l'extension.
   * @returns {Object} Les paramètres de l'extension.
   */
  storageGet() {
    browserStorage.get((result) => {
      // Si la version est la même, on récupère les paramètres
      if (result.version == this.version) this.stored = result.settings;
      else {
        // Si la version n'est pas définie, definit la version à 0
        if (result.version == undefined) result = { settings: result, version: 0 };
        // Met à jour les paramètres
        this.updateSettings(result);
      }
      // Retourne les paramètres
      return this.stored;
    });
  },

  /**
   * Enregistre les paramètres de l'extension.
   */
  storageSet() {
    // Vide le stockage
    browserStorage.clear();
    // Enregistre les nouveaux paramètres
    browserStorage.set({ settings: this.stored, version: this.version });
  },
};

console.log(Settings.storageGet());

/* █▀█ ▄▀█ █▀█ ▄▀█ █▀▄▀█ █▀▀ ▀█▀ █▀▀ █▀█ █▀ */
/* █▀▀ █▀█ █▀▄ █▀█ █ ▀ █ ██▄  █  ██▄ █▀▄ ▄█ */

/**
 * Classe représentant un paramètre de l'extension.
 * @class
 * @property {string} id L'identifiant du paramètre.
 *
 */
class Parameter {
  constructor(id, type, reloadingRequired = false, subOptions, defaultValue) {
    this.id = id;
    this.type = type;
    this.reloadingRequired = reloadingRequired;
    this.subOptions = subOptions;
  }
}

class Switch extends Parameter {
  constructor(id, reloadingRequired = false, subOptions, defaultValue) {
    super(id, "switch", reloadingRequired, subOptions);
    this.value = defaultValue;
  }
}

defaultValue = [
  {
    id: "notesTable",
    options: [
      {
        id: "noteTableAnalysis",
        type: "switch",
        value: true,
        reloadingRequired: true,
        subOptions: [
          {
            id: "generalAverageDisplay",
            type: "switch",
            value: true,
            reloadingRequired: true,
          },
          {
            id: "AveragesPerSubjectDisplay",
            type: "switch",
            value: true,
            reloadingRequired: true,
          },
          {
            id: "ClassAveragesDisplay",
            type: "switch",
            value: true,
            reloadingRequired: true,
          },
          {
            id: "AveragesPerSubjectRecalculation",
            type: "switch",
            value: false,
            reloadingRequired: true,
          },
          {
            id: "AveragesColorIndicator",
            type: "selection",
            SelectionParams: {
              xplacement: -170,
              options: [
                {
                  title: "Aucun",
                  selection: "none",
                  img: "svg/AveragesColorIndicator/1.svg",
                },
                {
                  title: "Ronds",
                  selection: "round",
                  img: "svg/AveragesColorIndicator/2.svg",
                },
                {
                  title: "Fonds",
                  selection: "background",
                  img: "svg/AveragesColorIndicator/3.svg",
                },
                {
                  title: "Contours",
                  selection: "outline",
                  img: "svg/AveragesColorIndicator/4.svg",
                },
              ],
            },
            value: "background",
            reloadingRequired: false,
          },
          {
            id: "AveragesInfluenceTooltips",
            type: "selection",
            SelectionParams: {
              xplacement: -170,
              options: [
                {
                  title: "Aucun",
                  selection: "none",
                  img: "svg/AveragesInfluenceTooltips/1.svg",
                },
                {
                  title: "Valeur",
                  selection: "value",
                  img: "svg/AveragesInfluenceTooltips/2.svg",
                },
                {
                  title: "Texte & Valeur",
                  selection: "textAndValue",
                  img: "svg/AveragesInfluenceTooltips/3.svg",
                },
              ],
            },
            value: "textAndValue",
            reloadingRequired: false,
          },
        ],
      },
    ],
  },
  {
    id: "sidebar",
    options: [
      {
        id: "newSidebar",
        type: "switch",
        value: false,
        reloadingRequired: true,
        subOptions: [
          {
            id: "sidebarDarkmode",
            type: "switch",
            value: false,
            reloadingRequired: false,
          },
          {
            id: "pinnedSidebar",
            type: "switch",
            value: false,
            reloadingRequired: false,
          },
          {
            id: "hideCustomizationButton",
            type: "switch",
            value: false,
            reloadingRequired: false,
          },
          {
            id: "customizationButton",
            type: "multiselection",
            MultiselectionParams: {
              xplacement: -300,
              selections: [
                [
                  {
                    title: "Aucun",
                    selection: "none",
                    img: "svg/AveragesInfluenceTooltips/1.svg",
                  },
                  {
                    title: "Valeur",
                    selection: "value",
                    img: "svg/AveragesInfluenceTooltips/2.svg",
                  },
                  {
                    title: "Texte & Valeur",
                    selection: "textAndValue",
                    img: "svg/AveragesInfluenceTooltips/3.svg",
                  },
                ],
              ],
            },
            value: "textAndValue",
            reloadingRequired: false,
          },
        ],
      },
    ],
  },
  {
    id: "customizations",
    options: [],
  },
  {
    id: "development",
    options: [],
  },
];

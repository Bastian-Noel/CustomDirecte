/* IMPORT CHROME LIB */
browser = chrome;
browserStorage = browser.storage.sync;
browserVersion = browser.runtime.getManifest().version_name;
browserStorageOnChanged = browser.storage.sync.onChanged;
/* ----------------- */

/**
 * @fileOverview Gestion des paramètres de l'extension.
 * @author Bastian NOEL
 * @version 1.0.0
 */
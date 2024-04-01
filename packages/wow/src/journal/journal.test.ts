import { describe, it, expect } from 'vitest';
import { base, mediaBase } from '../base';
import { journalApi } from './journal';

describe('journalApi', () => {
  it('should return the journal encounter resource for a given journalEncounterId', () => {
    const journalEncounterId = 123;
    const resource = journalApi.journalEncounter(journalEncounterId);
    expect(resource.path).toBe(`${base}/journal-encounter/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal encounter index resource', () => {
    const resource = journalApi.journalEncounterIndex();
    expect(resource.path).toBe(`${base}/journal-encounter/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal expansion resource for a given journalExpansionId', () => {
    const journalExpansionId = 456;
    const resource = journalApi.journalExpansion(journalExpansionId);
    expect(resource.path).toBe(`${base}/journal-expansion/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal expansion index resource', () => {
    const resource = journalApi.journalExpansionIndex();
    expect(resource.path).toBe(`${base}/journal-expansion/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal instance resource for a given journalInstanceId', () => {
    const journalInstanceId = 789;
    const resource = journalApi.journalInstance(journalInstanceId);
    expect(resource.path).toBe(`${base}/journal-instance/789`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal instance index resource', () => {
    const resource = journalApi.journalInstanceIndex();
    expect(resource.path).toBe(`${base}/journal-instance/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal instance media resource for a given journalInstanceId', () => {
    const journalInstanceId = 789;
    const resource = journalApi.journalInstanceMedia(journalInstanceId);
    expect(resource.path).toBe(`${mediaBase}/journal-instance/789`);
    expect(resource.namespace).toBe('static');
  });
});

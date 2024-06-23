import { describe, it } from 'vitest';
import { base, mediaBase, searchBase } from '../base';
import * as journalApi from './journal';

describe.concurrent('journalApi', () => {
  it('should return the journal encounter resource for a given journalEncounterId', ({ expect }) => {
    const journalEncounterId = 123;
    const resource = journalApi.journalEncounter(journalEncounterId);
    expect(resource.path).toBe(`${base}/journal-encounter/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal encounter index resource', ({ expect }) => {
    const resource = journalApi.journalEncounterIndex();
    expect(resource.path).toBe(`${base}/journal-encounter/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal expansion resource for a given journalExpansionId', ({ expect }) => {
    const journalExpansionId = 456;
    const resource = journalApi.journalExpansion(journalExpansionId);
    expect(resource.path).toBe(`${base}/journal-expansion/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal expansion index resource', ({ expect }) => {
    const resource = journalApi.journalExpansionIndex();
    expect(resource.path).toBe(`${base}/journal-expansion/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal instance resource for a given journalInstanceId', ({ expect }) => {
    const journalInstanceId = 789;
    const resource = journalApi.journalInstance(journalInstanceId);
    expect(resource.path).toBe(`${base}/journal-instance/789`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal instance index resource', ({ expect }) => {
    const resource = journalApi.journalInstanceIndex();
    expect(resource.path).toBe(`${base}/journal-instance/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal instance media resource for a given journalInstanceId', ({ expect }) => {
    const journalInstanceId = 789;
    const resource = journalApi.journalInstanceMedia(journalInstanceId);
    expect(resource.path).toBe(`${mediaBase}/journal-instance/789`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the journal encounter search resource with parameters', ({ expect }) => {
    const resource = journalApi.journalEncounterSearch({
      _page: 1,
      instanceName: 'instanceName',
      locale: 'en_US',
      orderby: 'name',
    });
    expect(resource.path).toBe(`${searchBase}/journal-encounter`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'instance.name.en_US': 'instanceName',
      orderby: 'name',
    });
  });

  it('should return the journal encounter search resource when orderby is an array', ({ expect }) => {
    const resource = journalApi.journalEncounterSearch({
      _page: 1,
      instanceName: 'instanceName',
      locale: 'en_US',
      orderby: ['name', 'id'],
    });
    expect(resource.path).toBe(`${searchBase}/journal-encounter`);
    expect(resource.namespace).toBe('static');
    expect(resource.parameters).toEqual({
      _page: 1,
      'instance.name.en_US': 'instanceName',
      orderby: 'name,id',
    });
  });
});
